import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import AddCloth from "../views/AddCloth.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/cloth",
      name: "add-cloth",
      component: AddCloth,
    },
  ],
});

router.beforeEach((to, from, next) => {
  let isAuthenticated = localStorage.access_token;
  if (to.name !== "login" && !isAuthenticated) {
    if (to.name === "register") {
      next();
    } else {
      next({ name: "login" });
    }
  } else if (
    (to.name === "login" || to.name === "register") &&
    isAuthenticated
  ) {
    next({ path: "/" });
  } else next();
});

export default router;
