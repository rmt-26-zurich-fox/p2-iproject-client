import { createRouter, createWebHistory } from "vue-router";
import supabase from "../helpers/supabase";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import LobbyView from "../views/LobbyView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        requireAuth: true,
      },
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/lobby",
      name: "lobby",
      component: LobbyView,
      meta: {
        requireAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const currentUser = supabase.auth.user();
  const requireAuth = to.matched.some((record) => record.meta.requireAuth);
  if (requireAuth && !currentUser) {
    next("/login");
  } else if (!requireAuth && currentUser) {
    next("/");
  } else {
    next();
  }
});

export default router;
