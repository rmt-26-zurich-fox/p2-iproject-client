import { createRouter, createWebHistory } from "vue-router";
import supabase from "../helpers/supabase";
import LoginView from "../views/LoginView.vue";
import GameView from "../views/GameView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/",
      name: "game",
      component: GameView,
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
