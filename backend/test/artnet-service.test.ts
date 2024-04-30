import ArtNetService from "../src/services/ArtNetService";

describe("ArtnetService", () => {
    ArtNetService.addNode(0, "255.255.255.0");
    let artnet: ArtNetService = ArtNetService.getInstance(true);

    it("should put singlechannel on", () => {
        artnet.sendData(0, new Uint8ClampedArray([255]).fill(255));
    });

    it("should put singlechannel off", () => {
        artnet.sendData(0, new Uint8ClampedArray([255]).fill(0));
    });
});
