
import env from "../env";
import net from "node:net";
import getLogger from "../utils/logger";
import TcpService from "./TcpService";

class BeamerService {
    private static _instance: BeamerService | null = null;
    public static getInstance(ip: string = env.BEAMER_IP): BeamerService {
        if (!BeamerService._instance) BeamerService._instance = new BeamerService();
        return BeamerService._instance;
    }

    private constructor() {
        this.log("INFO", "BeamerService initialized");
    }

    /**
     * ! specify cmd without > prefix and \r\n suffix
     */
    public async sendRS232Command(cmd: string) {
        const tcpService = new TcpService(env.BEAMER_IP, 80);

        return await tcpService.sendRequest({
            method: "POST",
            path: "/cgi-bin/MMX32_Keyvalue.cgi",
            body: `{CMD=>${cmd}`,
            headers: {},
        });
    }

    public async powerOn() {
        const rs232Cmd = "Send_H_4_4:02 50 4F 4E 03";
        return this.sendRS232Command(rs232Cmd);
    }

    public async powerOff() {
        const rs232Cmd = "Send_H_4_4:02 50 4F 46 03";
        return this.sendRS232Command(rs232Cmd);
    }


    private log = getLogger("BeamerService");
}

export default BeamerService;
