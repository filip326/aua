import BeamerService from "../services/BeamerService";

class BeamerController {
    public static async powerOn() {
        const rs232Cmd = ""; // TODO
        return BeamerService.getInstance().sendRS232Command(rs232Cmd);
    }

    public static async powerOff() {
        const rs232Cmd = ""; // TODO
        return BeamerService.getInstance().sendRS232Command(rs232Cmd);
    }

    public static async imageFormat_16to9() {
        const rs232Cmd = ""; // TODO
        return BeamerService.getInstance().sendRS232Command(rs232Cmd);
    }

    public static async imageFormat_4to3() {
        const rs232Cmd = ""; // TODO
        return BeamerService.getInstance().sendRS232Command(rs232Cmd);
    }

    public static async source_stageLeft() {
        const rs232Cmd = ""; // TODO
        return BeamerService.getInstance().sendRS232Command(rs232Cmd);
    }

    public static async source_regie() {
        const rs232Cmd = ""; // TODO
        return BeamerService.getInstance().sendRS232Command(rs232Cmd);
    }
}

export default BeamerController;
