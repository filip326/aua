import { createVuetify } from "vuetify";
// TODO: change this to only the necessary components for production
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";

export default createVuetify({
    components: components,
    directives: directives,
    icons: {
        defaultSet: "mdi",
        aliases: aliases,
        sets: {
            mdi: mdi,
        },
    },
    theme: {
        defaultTheme: "default",
        themes: {
            default: {
                dark: true,
                colors: {
                    surface: "#222222",
                    background: "#191919",
                    primary: "#242424",
                    secondary: "#111111",
                    success: "#43d600",
                    error: "#d60700",
                    info: "#008bd6",
                    warning: "#d65200",
                },
            },
        },
    },
});
