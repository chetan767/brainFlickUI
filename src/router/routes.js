const routes = [
  {
    path: "/",
    component: () => import("pages/NickNamePage.vue"),
  },
  {
    path: "/nickname",
    component: () => import("pages/NickNamePage.vue"),
  },
  {
    path: "/profile",
    component: () => import("pages/ProfilePage.vue"),
  },
  {
    path: "/topics",
    children: [
      {
        path: "",
        component: () => import("pages/TopicsPage.vue"),
      },
      {
        path: ":topicId",
        component: () => import("pages/QuizPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
