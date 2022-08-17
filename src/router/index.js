import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import MovieAll from "../components/MovieAll.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      path: "/",
      component: HomeView,
      children: [
        {
          path: "home",
          name: "movies",
          component: MovieAll,
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const access_token = localStorage.access_token;
  if ((to.name == "login" || to.name == "register") && access_token)
    return next("/home");
  if ((to.name !== "login" || to.name == "register") && !access_token)
    return next("/login");
  next();
});

export default router;
