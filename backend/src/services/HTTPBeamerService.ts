import env from "../env";
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

    private log = getLogger("HTTPBeamerService");
}

export default HTTPBeamerService;
