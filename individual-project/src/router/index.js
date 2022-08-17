import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import TanyaDokter from "../views/TanyaDokter.vue";
import RegisterAsDoctor from "../views/RegisterAsDoctor.vue";
import ProfileView from "../views/ProfileView.vue";
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
    {
      path: "/registerAsDoctor",
      name: "registerAsDoctor",
      component: RegisterAsDoctor,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.access_token;
  if ((to.name === "tanyaDokter" || to.name === "profile") && !isAuthenticated)
    next({ name: "login" });
  else if (
    (to.name === "login" ||
      to.name === "register" ||
      to.name === "registerAsDoctor") &&
    isAuthenticated
  )
    next({ name: "home" });
  else next();
});
export default router;
