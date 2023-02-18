import { createRouter, createWebHistory, type Router, type RouteRecordRaw } from "vue-router";
import {routers} from '@/router/router';
const routes: Array<RouteRecordRaw> = [...routers]

export const router:Router  = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});
export default router;
