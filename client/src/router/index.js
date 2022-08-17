import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import HomePage from "../views/HomePage.vue";
import HousesPage from "../views/HousesPage.vue";
import HouseDetailPage from "../views/HouseDetailPage.vue";
import AddNewHouse from "../views/AddNewHouse.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterPage,
    },
    {
      path: "/",
      component: HomePage,
      children: [
        {
          path: "",
          name: "housesPage",
          component: HousesPage,
        },
        {
          path: "houses/:houseId",
          name: "houseDetailPage",
          component: HouseDetailPage,
        },
        {
          path: "houses/host",
          name: "addNewHouse",
          component: AddNewHouse,
        },
      ],
    },
  ],
});

export default router;
