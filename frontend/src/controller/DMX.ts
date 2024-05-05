import useFetch from "./_useFetch";

export default class DMX {
    static sceneAnlageAn() {
        return useFetch("/dmx/scene/anlage-an");
    }

    static sceneAnlageAus() {
        return useFetch("/dmx/scene/anlage-aus");
    }

    static clearScenes() {
        return useFetch("/dmx/scene/clear");
    }

    static stageWW() {
        return useFetch("/dmx/scene/stage-ww");
    }

    static stageCW() {
        return useFetch("/dmx/scene/stage-cw");
    }

    static stageOff() {
        return useFetch("/dmx/scene/stage-off");
    }

    static stageV1() {
        return useFetch("/dmx/scene/stage-v1");
    }

    static stageV2() {
        return useFetch("/dmx/scene/stage-v2");
    }

    static stageV3() {
        return useFetch("/dmx/scene/stage-v3");
    }

    static spotLeft() {
        return useFetch("/dmx/scene/spot-left");
    }

    static spotMid() {
        return useFetch("/dmx/scene/spot-mid");
    }

    static spotOff() {
        return useFetch("/dmx/scene/spot-off");
    }

    static accentV1() {
        return useFetch("/dmx/scene/accent-v1");
    }

    static accentV2() {
        return useFetch("/dmx/scene/accent-v2");
    }

    static discoParty() {
        return useFetch("/dmx/scene/disco");
    }
}
