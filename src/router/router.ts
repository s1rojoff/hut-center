export const routers = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home/index.vue"),
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        meta: { name: "Dashboard" },
        component: () => import("@/views/Dashboard/index.vue"),
      },
      {
        path: "schedule",
        name: "Schedule",
        meta: { name: "Schedule" },
        component: () => import("@/views/Schedule/index.vue"),
      },
      {
        path: "homework",
        name: "Homework",
        meta: { name: "Homework" },
        component: () => import("@/views/Homework/index.vue"),
      },
      {
        path: "teacher",
        name: "Teacher",
        meta: { name: "Teacher" },
        component: () => import("@/views/Teacher/index.vue"),
      },
      {
        path: "message",
        name: "Message",
        meta: { name: "Message" },
        component: () => import("@/views/Message/index.vue"),
      },
      {
        path: "logout",
        name: "Logout",
        meta: { name: "Logout" },
        component: () => import("@/views/Logout/index.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/auth/index.vue"),
  }
];
