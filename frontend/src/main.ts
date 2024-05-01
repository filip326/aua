import { createApp } from "vue";
import vuetify from "./plugins/vuetify";
import App from "./App.vue";

import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

import "./styles/base.css";

createApp(App).use(vuetify).mount("#app");
