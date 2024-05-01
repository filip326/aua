import { createApp } from "vue";
import vuetify from "./plugins/vuetify";
import App from "./App.vue";

import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

import "./styles/base.css";
import router from "./plugins/router";

createApp(App).use(router).use(vuetify).mount("#app");
