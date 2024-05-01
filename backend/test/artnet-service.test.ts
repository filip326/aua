import ArtNetService from "../src/services/ArtNetService";

describe("ArtnetService", () => {
    ArtNetService.addNode(0, "255.255.255.255");
    let artnet: ArtNetService = ArtNetService.getInstance(true);

    it("should put 1-24 on", () => {
        artnet.sendData(0, new Uint8ClampedArray(24).fill(255));
    });

    it("should put 1-24 off", () => {
        artnet.sendData(0, new Uint8ClampedArray(24).fill(0));
    });
});
