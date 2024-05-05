import useFetch from "./_useFetch";

export default class X32 {
    static loadSceneDefault() {
        return useFetch("/x32/load-scene/default", "POST");
    }

    static muteToggle(channel: string) {
        return useFetch(`/x32/channel/${channel}/mute-toggle`, "POST");
    }

    static faderPlus(channel: "m1" | "m2" | "m3" | "h1" | "bluetooth" | "beamer" | "sub") {
        return useFetch(`/x32/channel/${channel}/fader/add`, "POST");
    }

    static faderMinus(channel: "m1" | "m2" | "m3" | "h1" | "bluetooth" | "beamer" | "sub") {
        return useFetch(`/x32/channel/${channel}/fader/min`, "POST");
    }
}
