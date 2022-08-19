import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import ProviderCard from "../components/ProviderCard.vue";
import ServiceCard from "../components/ServiceCard.vue";
import OrderList from "../components/OrderList.vue";

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
          component: ProviderCard,
        },
        {
          path: "provider/:id",
          name: "provider",
          component: ServiceCard,
        },
        {
          path: "orderlist",
          name: "orderList",
          component: OrderList,
        },
        // { path: "", name: "", component: "" },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (localStorage.getItem("access_token") && to.name === "login") {
    next({ name: "providerList" });
  } else if (!localStorage.getItem("access_token") && to.name === "providerList") {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
