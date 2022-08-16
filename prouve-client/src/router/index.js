import { createRouter, createWebHistory } from "vue-router";
import ProductList from "../views/ProductList.vue";
import LandingView from "../views/LandingView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import RecipePreview from "../views/RecipePreview.vue";
import RecipeDetail from "../views/RecipeDetail.vue";
import ForumView from "../views/ForumView.vue";
import ThreadDetail from "../views/ThreadDetail.vue";

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
    {
      path: "/recipe/:recipeId",
      name: "recipe-detail",
      component: RecipeDetail,
    },
    {
      path: "/forum",
      name: "forum",
      component: ForumView,
    },
    {
      path: "/forum/:threadId",
      name: "thread",
      component: ThreadDetail,
    },
  ],
});

router.beforeEach((to, from) => {
  if (!to.name) {
    return { name: "shop" };
  }
});

export default router;
