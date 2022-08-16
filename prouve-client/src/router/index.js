import { createRouter, createWebHistory } from "vue-router";
import ProductList from "../views/ProductList.vue";
import LandingView from "../views/LandingView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import RecipePreview from "../views/RecipePreview.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/shop",
      name: "shop",
      component: ProductList,
    },
    {
      path: "/",
      name: "landing",
      component: LandingView,
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
      path: "/recipe",
      name: "recipe",
      component: RecipePreview,
    },
  ],
});

export default router;
