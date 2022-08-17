import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import ProfilePage from "../views/ProfilePage.vue";
import ExplorePage from "../views/ExplorePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterPage,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfilePage,
    },
    {
      path: "/explore",
      name: "explore",
      component: ExplorePage,
    },
  ],
});

export default router;
