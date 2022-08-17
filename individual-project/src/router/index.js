import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import TanyaDokter from "../views/TanyaDokter.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/tanyaDokter",
      name: "tanyaDokter",
      component: TanyaDokter,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.access_token;
  if (to.name === "tanyaDokter" && !isAuthenticated) next({ name: "login" });
  else if ((to.name === "login" || top.name === "register") && isAuthenticated)
    next({ name: "home" });
  else next();
});
export default router;
