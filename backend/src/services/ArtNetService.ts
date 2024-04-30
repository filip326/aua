import env from "../env";
import getLogger from "../utils/logger";

class ArtNetService {
    private static _instance: ArtNetService;
    private static nodes: { [universe: number]: string };

    public static getInstance(): ArtNetService {
        if (!ArtNetService._instance) ArtNetService._instance = new ArtNetService();
        return ArtNetService._instance;
    }

    public static addNode(universe: number, ip: string) {
        ArtNetService.nodes[universe] = ip;
    }

    private constructor() {
        this.log("INFO", "ArtNetService initialized");
    }

    public setChannel(universe: number /* dmx data */) {
        const ip = ArtNetService.nodes[universe];
        if (!ip) {
            this.log("ERROR", `ArtNet-Node for universe ${universe} not found`);
            return;
        }

        // TODO: build and send artnet package
    }

    private log = getLogger("ArtNetService");
}

export default ArtNetService;
