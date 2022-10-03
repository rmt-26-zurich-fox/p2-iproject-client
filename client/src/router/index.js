import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Strategies from "../views/StrategiesPage.vue";
import ChoosePage from "../views/ChoosePage.vue";
import SiteChoose from "../views/SiteChoose.vue";
import StrategyPage from "../views/StrategyPage.vue";
import AgentsPage from "../views/AgentsPage.vue";
import AgentDetail from "../views/AgentDetail.vue";
import LoginPage from "../views/LoginPage.vue";
import MapsPage from "../views/MapsPage.vue";
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
    {
      path: "/type",
      name: "type",
      component: ChoosePage,
    },
    {
      path: "/site",
      name: "site",
      component: SiteChoose,
    },
    {
      path: "/strategy",
      name: "strategy",
      component: StrategyPage,
    },
    {
      path: "/agents",
      name: "agents",
      component: AgentsPage,
    },
    {
      path: "/detail",
      name: "detail",
      component: AgentDetail,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/maps",
      name: "maps",
      component: MapsPage,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name !== "login" && !localStorage.getItem("access_token"))
    next({ name: "login" });
  else next();
});

export default router;
