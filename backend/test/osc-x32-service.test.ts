import OSCx32Service from "../src/services/OSCx32Service";

describe("OSC X32 Service", () => {
    let x32: OSCx32Service;

    beforeEach(() => {
        x32 = OSCx32Service.getInstance("192.168.1.6");
    });

    afterEach(() => {
        x32.closeUDPSocket();
    });

    it("should mute channel 1", () => {
        x32.sendOSC("/ch/01/mix/on", "OFF");
    });

    it("should mute channel 1", () => {
        x32.sendOSC("/ch/01/mix/on", "ON");
    });
});
