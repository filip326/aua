import useFetch from "./_useFetch";

export default class Beamer {
    static powerOn() {
        return useFetch("/beamer/power/on", "POST");
    }

    static powerOff() {
        return useFetch("/beamer/power/off", "POST");
    }
}
