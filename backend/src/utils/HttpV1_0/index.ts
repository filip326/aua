import net from "node:net";

const crlf = "\x0d\x0a"; // <CR><LF>
const lflf = "\x0a\x0a"; // <LF><LF>

type HTTPMethod =
  | "GET"
  | "POST"
  | "PUT"
  | "DELETE"
  | "PATCH"
  | "HEAD"
  | "OPTIONS"
  | "CONNECT"
  | "TRACE";

class HttpV1_0_Request {
  private _method: HTTPMethod = "GET";
  private _host: string = "127.0.0.1";
  private _port: number = 80;
  private _path: string = "/";
  private _headers: Map<string, string> = new Map<string, string>();
  private _body: string | Uint8Array | null = null;

  constructor() {}

  public set method(method: HTTPMethod) {
    this._method = method;
  }
  public get method(): HTTPMethod {
    return this._method;
  }

  public set port(port: number) {
    this._port = port;
  }
  public get port(): number {
    return this._port;
  }

  public set host(host: string) {
    this._host = host;
  }
  public get host(): string {
    return this._host;
  }

  public set path(path: string) {
    this._path = path;
  }
  public get path(): string {
    return this._path;
  }

  public setHeader(key: string, value: string) {
    this._headers.set(key, value);
  }

  public getHeader(key: string): string | void {
    if (this._headers.has(key)) {
      return this._headers.get(key);
    }
  }

  public deleteHeader(key: string) {
    this._headers.delete(key);
  }

  public set body(data: string | Uint8Array | Buffer | null) {
    if (
      typeof data === "string" ||
      data === null ||
      data instanceof Uint8Array
    ) {
      this._body = data;
    }

    // data is a Buffer, convert it to Uint8Array
    if (data instanceof Buffer) {
      this._body = new Uint8Array(data);
    }
  }

  public get body(): string | Uint8Array | null {
    return this._body;
  }

  public get data(): Buffer {
    // convert the data (headers, body) so that it can be sent over the network
    let data = `${this._method} ${this._path} HTTP/1.0${crlf}`;
    if (this.port === 80) {
      data += `Host: ${this._host}${crlf}`;
    } else {
      data += `Host: ${this._host}:${this._port}${crlf}`;
    }
    this._headers.forEach((value, key) => {
      data += `${key}: ${value}${crlf}`;
    });
    if (this.body !== null) {
      data += `Content-Length: ${this.body.length}${crlf}`;
    }
    data += crlf;

    let encoder = new TextEncoder();
    let dataUint8Array = encoder.encode(data);
    if (this.body !== null) {
      if (typeof this.body === "string") {
        dataUint8Array = new Uint8Array([
          ...dataUint8Array,
          ...encoder.encode(this.body),
        ]);
      } else {
        dataUint8Array = new Uint8Array([...dataUint8Array, ...this.body]);
      }
    }
    // return the data as an buffer
    return Buffer.from(dataUint8Array.buffer);
  }
}

class PanasonicServerResponse {
  private _httpVersion: string = "";
  private _headers: Map<string, string> = new Map<string, string>();
  private _statusCode: number = 0;
  private _statusMessage: string = "";
  private _body: string | null = null;

  constructor(data: Buffer) {
    // parse the data
    // the headers and the body are seperated by a \x0a\x0a (<LF><LF>)
    let dataString = data.toString();
    let splitedData = dataString.split(lflf);
    let headers = splitedData[0].split(crlf);
    let body = splitedData[1] || "";

    // parse the headers
    let statusLine = headers[0].split(" ");
    headers = headers.slice(1);
    this._httpVersion = statusLine[0];
    this._statusCode = parseInt(statusLine[1]);
    this._statusMessage = statusLine[2];
    headers.forEach((header) => {
      let splitedHeader = header.split(": ");
      this._headers.set(splitedHeader[0], splitedHeader[1]);
    });
    // parse the body
    this._body = body;
  }

  public get httpVersion(): string {
    return this._httpVersion;
  }
  public getHeader(key: string): string | void {
    if (this._headers.has(key)) {
      return this._headers.get(key);
    }
  }
  public get headers(): Map<string, string> {
    const headersCopy = new Map<string, string>();
    this._headers.forEach((value, key) => {
      headersCopy.set(key, value);
    });
    return headersCopy;
  }
  public get statusCode(): number {
    return this._statusCode;
  }
  public get statusMessage(): string {
    return this._statusMessage;
  }
  public get body(): string | null {
    return this._body;
  }

  public get debugObject() {
    let object: { [key: string]: string | number | undefined } = {
      httpVersion: this._httpVersion,
      statusCode: this._statusCode,
      statusMessage: this._statusMessage,
      body: this._body || undefined,
    };
    this._headers.forEach((value, key) => {
      object[key] = value;
    });
    return object;
  }
}

class Http_v1_0_Client {
  private _ready: boolean = false;
  public get ready(): boolean {
    return (
      this._ready &&
      !this.tcpClient.closed &&
      !this.tcpClient.destroyed &&
      !this.tcpClient.errored &&
      this.tcpClient.readable &&
      this.tcpClient.writable &&
      !this.tcpClient.connecting
    );
  }
  private tcpClient: net.Socket = new net.Socket();

  constructor(private _host: string, private _port: number = 80) {}

  private init() {
    if (!this.ready) {
      this._ready = false;
      // destroy the client
      this.tcpClient.destroy();
      // create a new client
      this.tcpClient = new net.Socket();
      // connect to the server
      this.tcpClient.connect(this._port, this._host, () => {
        this._ready = true;
      });
    }
  }

  private close() {
    this.tcpClient.end();
    this.tcpClient.destroy();
    this._ready = false;
    this.tcpClient = new net.Socket(); // create a new client
  }

  public request(
    cb: (req: HttpV1_0_Request) => HttpV1_0_Request
  ): Promise<PanasonicServerResponse> {
    const httpRequest = cb(new HttpV1_0_Request());
    return this.sendRequest(httpRequest);
  }

  public sendRequest(req: HttpV1_0_Request): Promise<PanasonicServerResponse> {
    const that = this;
    // send the request to the server
    // first, make sure the client is ready
    this.init();
    // make sure host and port match with the server address
    req.host = this._host;
    req.port = this._port;
    req.setHeader("Connection", "close");
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        that.tcpClient.off("data", onData);
        that.tcpClient.off("end", onEnd);
        this.close();
        reject(Buffer.concat(data));
      }, 1000);
      // send the request
      this.tcpClient.write(req.data);
      // listen for the response
      let data: Buffer[] = [];
      function onData(chunk: Buffer) {
        data.push(chunk);
      }
      this.tcpClient.on("data", onData);
      function onEnd() {
        clearInterval(timeout);
        let response = new PanasonicServerResponse(Buffer.concat(data));
        that.tcpClient.off("data", onData);
        that.tcpClient.off("end", onEnd);
        that.close();
        resolve(response);
      }
      this.tcpClient.once("end", onEnd);
    });
  }
}

export {
  HttpV1_0_Request,
  PanasonicServerResponse,
  HTTPMethod,
  Http_v1_0_Client,
  crlf,
  lflf,
};
