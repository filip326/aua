import useFetch from "./_useFetch";

export default class DMX {
    static sceneAnlageAn() {
        return useFetch("/dmx/scene/anlage-an", "POST");
    }

    static sceneAnlageAus() {
        return useFetch("/dmx/scene/anlage-aus", "POST");
    }

    static clearScenes() {
        return useFetch("/dmx/scene/clear", "POST");
    }

    static stageWW() {
        return useFetch("/dmx/scene/stage-ww", "POST");
    }

    static stageCW() {
        return useFetch("/dmx/scene/stage-cw", "POST");
    }

    static stageOff() {
        return useFetch("/dmx/scene/stage-off", "POST");
    }

    static stageV1() {
        return useFetch("/dmx/scene/stage-v1", "POST");
    }

    static stageV2() {
        return useFetch("/dmx/scene/stage-v2", "POST");
    }

    static stageV3() {
        return useFetch("/dmx/scene/stage-v3", "POST");
    }

    static spotLeft() {
        return useFetch("/dmx/scene/spot-left", "POST");
    }

    static spotMid() {
        return useFetch("/dmx/scene/spot-mid", "POST");
    }

    static spotOff() {
        return useFetch("/dmx/scene/spot-off", "POST");
    }

    static accentV1() {
        return useFetch("/dmx/scene/accent-v1", "POST");
    }

    static accentV2() {
        return useFetch("/dmx/scene/accent-v2", "POST");
    }

    static discoParty() {
        return useFetch("/dmx/scene/disco", "POST");
    }
}
