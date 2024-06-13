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
                    surface: "#222222", // grey
                    background: "#191919", // dark grey
                    primary: "#0050b4", // blue
                    secondary: "#111111", // near black
                    success: "#1bb400", // green
                    error: "#b40000", // red
                    info: "#0088cc", // light blue
                    warning: "#ff5500", // deep orange
                    darker: "#1c1c1c", // grey
                },
            },
        },
    },
});
