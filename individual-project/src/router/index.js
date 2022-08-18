import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import ChatView from "../views/ChatView.vue";

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
      path: "/chatView",
      name: "ChatView",
      component: ChatView,
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
    { path: "/chat", name: "chat", component: ChatView },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.access_token;
  if ((to.name === "ChatView" || to.name === "profile") && !isAuthenticated)
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
