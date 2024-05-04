import useFetch from "./_useFetch";

export default class Beamer {
    static powerOn() {
        return useFetch("/power/on", "POST");
    }

    static powerOff() {
        return useFetch("/power/off", "POST");
    }

    static imageFormat_16to9() {
        return useFetch("/format/16:9", "POST");
    }

    static imageFormat_4to3() {
        return useFetch("/format/4:3", "POST");
    }

    static source_stageLeft() {
        return useFetch("/src/stage_left", "POST");
    }

    static source_regie() {
        return useFetch("/src/regie", "POST");
    }
}
