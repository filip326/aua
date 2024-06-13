import useFetch from "./_useFetch";

export type ChannelType = "m1" | "m2" | "m3" | "h1" | "bluetooth" | "beamer" | "sub";

export default class X32 {
    static loadSceneDefault() {
        return useFetch("/x32/load-scene/default", "POST");
    }

    static muteToggle(channel: ChannelType) {
        return useFetch(`/x32/channel/${channel}/mute-toggle`, "POST");
    }

    static faderPlus(channel: ChannelType) {
        return useFetch(`/x32/channel/${channel}/fader/add`, "POST");
    }

    static faderMinus(channel: ChannelType) {
        return useFetch(`/x32/channel/${channel}/fader/min`, "POST");
    }
}
