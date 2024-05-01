import env from "../env";
import { HttpV1_0_Request } from "../utils/HttpV1_0";
import getLogger from "../utils/logger";

class HTTPBeamerService {
    private static _instance: HTTPBeamerService;
    public static getInstance(ip: string = env.BEAMER_IP): HTTPBeamerService {
        if (!HTTPBeamerService._instance) HTTPBeamerService._instance = new HTTPBeamerService(ip);
        return HTTPBeamerService._instance;
    }

    private url: `http://${string}`;
    private constructor(ip: string) {
        this.url = `http://${ip}`;
        this.log("INFO", "HTTPBeamerService initialized");
    }

    private sendRs232Command(command: string) {
        const request = new HttpV1_0_Request();
        request.method = "POST";
        request.host = this.url;
        request.path = "/cgi-bin/MMX32_Keyvalue.cgi";
        request.body = `{CMD=>${command}\r\n`;

        return;
    }

    private log = getLogger("HTTPBeamerService");
}

export default HTTPBeamerService;
