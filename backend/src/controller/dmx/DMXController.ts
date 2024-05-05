import ArtNetService from "../../services/ArtNetService";
import PATCH from "./patch";

class DMXController {
    private static data: Uint8ClampedArray = new Uint8ClampedArray(512).fill(0);

    constructor() {
        ArtNetService.addNode(0, "255.255.255.255");
    }
}
