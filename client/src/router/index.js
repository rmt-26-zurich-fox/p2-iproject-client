import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Strategies from "../views/StrategiesPage.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/strategies",
      name: "strategies",
      component: Strategies,
    },
  ],
});

export default router;
