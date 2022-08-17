import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import CreateProfilePage from "../views/CreateProfilePage.vue";
import HomeView from "../views/HomeView.vue";
import TeamDetailPage from "../views/TeamDetailPage.vue";
import FavoritePage from "../views/FavoritePage.vue";
import CreateThread from "../views/CreateThread.vue";
import ThreadList from "../views/ThreadList.vue";
import ThreadDetail from "../views/ThreadDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "LoginPage",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "RegisterPage",
      component: RegisterPage,
    },
    {
      path: "/",
      name: "HomePage",
      component: HomeView,
    },
    {
      path: "/profile",
      name: "ProfilePage",
      component: CreateProfilePage,
    },
    {
      path: "/teams/:id",
      name: "TeamDetail",
      component: TeamDetailPage,
    },
    {
      path: "/favourites",
      name: "FavoritePage",
      component: FavoritePage,
    },
    {
      path: "/threads",
      name: "ParentThread",
      children: [
        {
          path: "create",
          name: "CreateThread",
          component: CreateThread,
        },
        {
          path: "",
          name: "ThreadList",
          component: ThreadList,
        },
        {
          path: ":id",
          name: "ThreadDetail",
          component: ThreadDetail,
        },
      ],
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
