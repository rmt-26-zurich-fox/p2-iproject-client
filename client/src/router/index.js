import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import ParentView from "../views/ParentView.vue";
import BmiView from "../views/BmiView.vue";
import BmrView from "../views/BmrView.vue";
import FatView from "../views/FatView.vue";
import CravingView from "../views/CravingView.vue";
import NotFound from "../views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginView,
      beforeEnter: () => {
        if (localStorage.getItem("access_token")) return { name: "home" };
      },
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/",
      component: ParentView,
      children: [
        {
          path: "/:pathMatch(.*)*",
          name: "notFound",
          component: NotFound,
        },
        {
          path: "",
          name: "home",
          component: HomeView,
        },
        {
          path: "health/bmi",
          name: "bmi",
          component: BmiView,
        },
        {
          path: "health/bmr",
          name: "bmr",
          component: BmrView,
        },
        {
          path: "cravings",
          name: "craving",
          component: CravingView,
          beforeEnter: () => {
            if (!localStorage.getItem("access_token")) return { name: "login" }
          }
        },
        {
          path: "health/fat-percentage",
          name: "fat-percentage",
          component: FatView,
        },
      ],
    },
  ],
});

export default router;
