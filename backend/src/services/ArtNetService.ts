import getLogger from "../utils/logger";
import dgram from "dgram";
import env from "../env";
import buildArtNetPackage from "../utils/artnet";

class ArtNetService {
    private static _instance: ArtNetService;
    private static nodes: { [universe: number]: string };

    public static getInstance(): ArtNetService {
        if (!ArtNetService._instance) ArtNetService._instance = new ArtNetService(env.SEND_ARTNET_AS_BROADCAST_ANYWAY);
        return ArtNetService._instance;
    }

    public static addNode(universe: number, ip: string) {
        ArtNetService.nodes[universe] = ip;
    }

    private socket: dgram.Socket;

    private constructor(useBroadcast: boolean = false) {
        this.socket = dgram.createSocket({ type: "udp4" });

        this.socket.on("error", (err) => {
            this.log("ERROR", `ArtNet-Service error: ${JSON.stringify(err)}`);
            this.socket.close();
        });

        if (useBroadcast) this.socket.setBroadcast(true);

        this.log("INFO", "ArtNetService initialized");
    }

    public sendData(universe: number, data: Uint8ClampedArray) {
        const ip = ArtNetService.nodes[universe];
        if (!ip) {
            this.log("ERROR", `ArtNet-Node for universe ${universe} not found`);
            return;
        }

        const artnetPackage = buildArtNetPackage(universe, Array.from(data));
        const bufferedPackage = Buffer.from(artnetPackage);

        // TODO: send package to node
        this.socket.send(bufferedPackage, 0, bufferedPackage.length, 6454, ip, (err) => {
            if (err) {
                this.log("ERROR", `ArtNet-Service error: ${JSON.stringify(err)}`);
            }
        });
    }

    public closeSocket() {
        this.log("INFO", "Closing ArtNet Socket");
        this.socket.close();
    }

    private log = getLogger("ArtNetService");
}

export default ArtNetService;
