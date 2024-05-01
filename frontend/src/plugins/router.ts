import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/pi",
            name: "Pi Display",
            component: () => import("../pages/pi/Index.vue"),
        },
    ],
});
