import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import ServiceProviderList from "../components/ServiceProviderList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      path: "/",
      name: "home",
      component: HomeView,
      children: [
        {
          path: "",
          name: "providerList",
          component: ServiceProviderList,
        },
        // { path: "", name: "", component: "" },
        // { path: "", name: "", component: "" },
        // { path: "", name: "", component: "" },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (localStorage.getItem("access_token") && to.name === "login") {
    next({ name: "providerList" });
  } else if (!localStorage.getItem("access_token") && to.name === "home") {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
