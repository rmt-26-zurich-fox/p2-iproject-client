import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import HomeView from "../views/HomeView.vue";
import MainView from "../views/MainView.vue";
import MovieDetail from "../components/MovieDetail.vue";

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
      component: MainView,
      children: [
        {
          path: "home",
          name: "movies",
          component: HomeView,
        },
        {
          path: "detail/:id",
          name: "detail",
          component: MovieDetail,
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const access_token = localStorage.access_token;
  if (to.path == "/") return next("/home");
  if ((to.name == "login" || to.name == "register") && access_token)
    return next("/home");
  if ((to.name !== "login" || to.name == "register") && !access_token)
    return next("/login");
  next();
});

export default router;
