import useFetch from "./_useFetch";

export default class Beamer {
    static powerOn() {
        return useFetch("/beamer/power/on", "POST");
    }

    static powerOff() {
        return useFetch("/beamer/power/off", "POST");
    }

    static imageFormat_16to9() {
        return useFetch("/beamer/format/16:9", "POST");
    }

    static imageFormat_4to3() {
        return useFetch("/beamer/format/4:3", "POST");
    }

    static source_stageLeft() {
        return useFetch("/beamer/src/stage_left", "POST");
    }

    static source_regie() {
        return useFetch("/beamer/src/regie", "POST");
    }
}
