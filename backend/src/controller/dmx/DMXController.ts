import ArtNetService from "../../services/ArtNetService";
// import PATCH from "./patch";

class DMXController {
    private data: Uint8ClampedArray = new Uint8ClampedArray(512).fill(0);

    constructor() {
        ArtNetService.addNode(0, "255.255.255.255");
    }

    clearScenes() {
        this.data = new Uint8ClampedArray(512).fill(0);
        for (let i = 0; i < 24; i++) {
            // make single channel fixtures on
            this.data[i] = 255;
        }
        return ArtNetService.getInstance().sendDataAsync(0, this.data);
    }

    sceneAnlageAn() {
        this.data = new Uint8ClampedArray(512).fill(0);
        for (let i = 0; i < 24; i++) {
            // make single channel fixtures on
            this.data[i] = 255;
        }
        return ArtNetService.getInstance().sendDataAsync(0, this.data);
    }

    sceneAnlageAus() {
        this.data = new Uint8ClampedArray(512).fill(0);
        return ArtNetService.getInstance().sendDataAsync(0, this.data);
    }
}

export default DMXController;
