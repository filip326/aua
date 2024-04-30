import getLogger from "../utils/logger";
import dgram from "dgram";
import env from "../env";
import buildArtNetPackage from "../utils/artnet";

class ArtNetService {
    private static _instance: ArtNetService;
    // map of universe to ip address
    private static nodes: { [universe: number]: string };

    public static getInstance(
        sendBroadcast: boolean = env.SEND_ARTNET_AS_BROADCAST_ANYWAY === "true" ?? false,
    ): ArtNetService {
        if (!ArtNetService._instance) ArtNetService._instance = new ArtNetService(sendBroadcast);
        return ArtNetService._instance;
    }

    /**
     * Links a universe to the desired destination ip address (of the artnet-node listening on that universe)
     * note: only one node/ ip address per universe is supported
     * @param universe the universe of the node
     * @param ip the ip address of the node
     */
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

    public sendData(
        universe: number,
        data: Uint8ClampedArray,
        cb: (err: Error | null) => void = (err) => {
            if (err) {
                this.log("ERROR", `ArtNet-Service error: ${JSON.stringify(err)}`);
            }
        },
    ) {
        const ip = ArtNetService.nodes[universe];
        if (!ip) {
            this.log("ERROR", `ArtNet-Node for universe ${universe} not found`);
            return;
        }

        const artnetPackage = buildArtNetPackage(universe, Array.from(data));
        const bufferedPackage = Buffer.from(artnetPackage);

        // TODO: send package to node

        this.socket.send(bufferedPackage, 0, bufferedPackage.length, 6454, ip, cb);
    }

    public sendDataAsync(universe: number, data: Uint8ClampedArray): Promise<void> {
        return new Promise((resolve, reject) => {
            this.sendData(universe, data, (err) => {
                if (err) reject(err);
                else resolve();
            });
        });
    }

    public closeSocket() {
        this.log("INFO", "Closing ArtNet Socket");
        this.socket.close();
    }

    private log = getLogger("ArtNetService");
}

export default ArtNetService;
