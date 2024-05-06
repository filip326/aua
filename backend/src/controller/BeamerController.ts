import BeamerService from "../services/BeamerService";

class BeamerController {
    public static async powerOn() {
        const rs232Cmd = "Send_H_4_4:02 50 4F 4E 03";
        return BeamerService.getInstance().sendRS232Command(rs232Cmd);
    }

    public static async powerOff() {
        const rs232Cmd = "Send_H_4_4:02 50 4F 46 03";
        return BeamerService.getInstance().sendRS232Command(rs232Cmd);
    }
}

export default BeamerController;
