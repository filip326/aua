import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Pi Display",
            component: () => import("../pages/Main.vue"),
        },
    ],
});
