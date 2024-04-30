import getLogger from "../utils/logger";
import dgram from "dgram";
import env from "../env";

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

        const artnetPackage = this._buildArtNetPackage(universe, Array.from(data));
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

    private _buildArtNetPackage(universe: number, data: Array<number>): Array<number> {
        let lenght = data.length;

        if (lenght > 512) {
            // DMX512 = 512 channels = 512 bytes
            lenght = 512;
        }

        if (lenght % 2) {
            lenght += 1;
        }

        const hUni = (universe >> 8) & 0xff;
        const lUni = universe & 0xff;
        const hLen = (lenght >> 8) & 0xff;
        const lLen = lenght & 0xff;

        // Protocol Name, Version, Sequence, Universe, Data Length
        const artnetHeader = [65, 114, 116, 45, 78, 101, 116, 0, 0, 80, 0, 14, 0, 0, lUni, hUni, hLen, lLen];
        const artnetPackage = artnetHeader.concat(data.slice(hLen * 256 + lLen));

        return artnetPackage;
    }
}

export default ArtNetService;
