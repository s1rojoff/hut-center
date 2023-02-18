export const routers = [
  {
    path: "/student",
    name: "Students",
    component: () => import("@/views/userStudent/index.vue"),
    children:  [
      {
        path: "schedule",
        name: "Student Schedule",
        component: () => import("@/views/userStudent/Schedule/index.vue"),
      },
      {
        path: "homework",
        name: "Student Homework",
        component: () => import("@/views/userStudent/Homework/index.vue"),
      },
      {
        path: "message",
        name: "Student Message",
        component: () => import("@/views/userStudent/Message/index.vue"),
      },
    ],
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("@/views/userAdmin/index.vue"),
    children: [
      {
        path: "schedule",
        name: "Admin Schedule",
        component: () => import("@/views/userAdmin/Schedule/index.vue"),
      },
      {
        path: "class",
        name: "Admin Class",
        component: () => import("@/views/userAdmin/Classes/index.vue"),
      },
      {
        path: "teacher",
        name: "Admin Teacher",
        component: () => import("@/views/userAdmin/Teacher/index.vue"),
      },
      {
        path: "student",
        name: "Admin Student",
        component: () => import("@/views/userAdmin/Students/index.vue"),
      },
      {
        path: "location",
        name: "Admin Location",
        component: () => import("@/views/userAdmin/Location/index.vue"),
      },
    ],
  },
  {
    path: "/",
    name: "Login",
    component: () => import("@/views/auth/index.vue"),
    meta:{
      public: true
    }
  },
];
