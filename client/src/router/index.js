import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import HomePage from "../views/HomePage.vue";
import HousesPage from "../views/HousesPage.vue";
import HouseDetailPage from "../views/HouseDetailPage.vue";
import AddNewHouse from "../views/AddNewHouse.vue";
import NotFoundpage from "../views/NotFoundpage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginPage,
      beforeEnter: () => {
        if (localStorage.getItem("access_token")) {
          return { name: "housesPage" };
        }
      },
    },
    {
      path: "/register",
      name: "register",
      component: RegisterPage,
      beforeEnter: () => {
        if (localStorage.getItem("access_token")) {
          return { name: "housesPage" };
        }
      },
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
          beforeEnter: () => {
            if (!localStorage.getItem("access_token")) {
              return { name: "login" };
            }
          },
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notfound",
      component: NotFoundpage,
    },
  ],
});

router.beforeEach((to) => {
  if (!to.name) {
    return { name: "notfound" };
  }
});

export default router;
