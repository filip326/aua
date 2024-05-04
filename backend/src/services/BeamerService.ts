import env from "../env";
import net from "node:net";
import getLogger from "../utils/logger";
import { parseBeamerReponse, ParsedBeamerReponse } from "../utils/beamer_http/parseBeamerResponse";
import { BeamerRequest, buildRequestPackage } from "../utils/beamer_http/buildRequestPackage";

class BeamerService {
    private static _instance: BeamerService | null = null;
    public static getInstance(ip: string = env.BEAMER_IP): BeamerService {
        if (!BeamerService._instance) BeamerService._instance = new BeamerService(ip);
        return BeamerService._instance;
    }

    private host: string;
    private port: number;
    private tcpClient: net.Socket = new net.Socket();
    private constructor(host: string, port: number = 80) {
        this.host = host;
        this.port = port;
        this.log("INFO", "BeamerService initialized");
    }

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

    public async sendRS232Command(cmd: string) {
        return await this.sendRequest({
            method: "POST",
            path: "/cgi-bin/MMX32_Keyvalue.cgi",
            body: `{CMD=>${cmd}\r\n`,
            headers: {},
        });
    }

    public async sendRequest(conf: Omit<Omit<BeamerRequest, "host">, "port">): Promise<ParsedBeamerReponse> {
        this.initializeTCP();

        let req: BeamerRequest = { ...conf, host: this.host, port: this.port };
        req.headers["Connection"] = "close";

        return new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                this.tcpClient.off("data", onData);
                this.tcpClient.off("end", onEnd);
                this.close();
                reject(Buffer.concat(data));
            }, 1000);

            // send the request
            this.tcpClient.write(buildRequestPackage(req));
            // listen for the response
            let data: Buffer[] = [];
            function onData(chunk: Buffer) {
                data.push(chunk);
            }
            this.tcpClient.on("data", onData);
            const onEnd = () => {
                clearInterval(timeout);
                let response = parseBeamerReponse(Buffer.concat(data));
                this.tcpClient.off("data", onData);
                this.tcpClient.off("end", onEnd);
                this.close();
                resolve(response);
            };
            this.tcpClient.once("end", onEnd);
        });
    }

    private initializeTCP() {
        if (!this.ready) {
            this._ready = false;
            // destroy the client
            this.tcpClient.destroy();
            // create a new client
            this.tcpClient = new net.Socket();
            // connect to the server
            this.tcpClient.connect(this.port, this.host, () => {
                this._ready = true;
            });
        }
    }

    private close() {
        this.log("INFO", "Closing TCP Socket");
        this.tcpClient.end();
        this.tcpClient.destroy();
        this._ready = false;
        BeamerService._instance = null;
    }

    private log = getLogger("BeamerService");
}

export default BeamerService;
