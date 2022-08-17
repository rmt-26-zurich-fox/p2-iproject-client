import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../views/LoginPage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: ""
    },
    {
      path: "/login",
      name: "about",
      component: LoginPage
    },
  ],
});

export default router;
