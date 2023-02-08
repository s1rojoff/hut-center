import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/Home/index.vue"),
    },
    {
      path: "/auth",
      name: "Auth",
      component: () => import("../views/auth/index.vue"),
    },
  ],
});

export default router;
