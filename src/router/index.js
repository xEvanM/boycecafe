import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: () => import("../views/HomePage.vue") },
        { path: "/home", component: () => import("../views/HomePage.vue") },
        { path: "/menu", component: () => import("../views/MenuPage.vue") },
    ]
});


export default router;