import ArtNetService from "../../services/ArtNetService";
// import PATCH from "./patch";

class DMXController {
    private data: Uint8ClampedArray = new Uint8ClampedArray(512).fill(0);

    constructor() {
        ArtNetService.addNode(0, "255.255.255.255");
    }

    clearScenes(): Promise<void> {
        this.data = new Uint8ClampedArray(512).fill(0);
        for (let i = 0; i < 24; i++) {
            // make single channel fixtures on
            this.data[i] = 255;
        }
        return ArtNetService.getInstance().sendDataAsync(0, this.data);
    }

    sceneAnlageAn(): Promise<void> {
        this.data = new Uint8ClampedArray(512).fill(0);
        for (let i = 0; i < 24; i++) {
            // make single channel fixtures on
            this.data[i] = 255;
        }
        return ArtNetService.getInstance().sendDataAsync(0, this.data);
    }

    sceneAnlageAus(): Promise<void> {
        this.data = new Uint8ClampedArray(512).fill(0);
        return ArtNetService.getInstance().sendDataAsync(0, this.data);
    }

    stageWW(): Promise<void> {
        // TODO
        return ArtNetService.getInstance().sendDataAsync(0, this.data);
    }

    stageCW(): Promise<void> {
        // TODO
        return ArtNetService.getInstance().sendDataAsync(0, this.data);
    }

    stageOff(): Promise<void> {
        // TODO
        return ArtNetService.getInstance().sendDataAsync(0, this.data);
    }

    stageV1(): Promise<void> {
        // TODO
        return ArtNetService.getInstance().sendDataAsync(0, this.data);
    }

    stageV2(): Promise<void> {
        // TODO
        return ArtNetService.getInstance().sendDataAsync(0, this.data);
    }

    stageV3(): Promise<void> {
        // TODO
        return ArtNetService.getInstance().sendDataAsync(0, this.data);
    }

    spotLeft(): Promise<void> {
        // TODO
        return ArtNetService.getInstance().sendDataAsync(0, this.data);
    }

    spotMid(): Promise<void> {
        // TODO
        return ArtNetService.getInstance().sendDataAsync(0, this.data);
    }

    spotOff(): Promise<void> {
        // TODO
        return ArtNetService.getInstance().sendDataAsync(0, this.data);
    }

    accentV1(): Promise<void> {
        // TODO
        return ArtNetService.getInstance().sendDataAsync(0, this.data);
    }

    accentV2(): Promise<void> {
        // TODO
        return ArtNetService.getInstance().sendDataAsync(0, this.data);
    }

    disco(): Promise<void> {
        // TODO
        return ArtNetService.getInstance().sendDataAsync(0, this.data);
    }
}

export default DMXController;
