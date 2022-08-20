import { createRouter, createWebHistory } from "vue-router";
// Customer
import HomePage from "../views/HomePage.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import DetailProductPage from "../views/DetailProductPage.vue";
import CartProductPage from "../views/CartProductPage.vue";
import OrderProductPage from "../views/OrderProductPage.vue";
import UserProfilePage from "../views/UserProfilePage.vue";
import PageNotFound404 from "../views/PageNotFound404.vue";
// Admin
import HomePageAdmin from "../views/HomePageAdmin.vue";
import AdminOrderListPage from "../views/AdminOrderListPage.vue";

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
    // Customer
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/product-detail/:productId",
      name: "product-detail",
      component: DetailProductPage,
    },
    {
      path: "/cart",
      name: "product-cart",
      component: CartProductPage,
    },
    {
      path: "/order-list",
      name: "order-list",
      component: OrderProductPage,
    },
    {
      path: "/profile",
      name: "profile",
      component: UserProfilePage,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: PageNotFound404
    },
    // Admin
    {
      path: "/admin",
      name: "adminHome",
      component: HomePageAdmin,
    },
    {
      path: "/order-list-customer",
      name: "adminOrderList",
      component: AdminOrderListPage,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const access_token = localStorage.access_token;
  const role = localStorage.role;
  const edit_status = localStorage.edit_status;

  if ((from.path === "/login" && (to.path === "/" || to.path === "/admin")) && edit_status === "No") {
    next("/profile");
  } else if ((to.path === "/login" || to.path === "/register") && access_token && role === "Customer") {
    next("/");
  } else if ((to.path === "/login" || to.path === "/register") && access_token && role === "Admin") {
    next("/admin");
  } else if ((to.path === "/cart" || to.path === "/order-list" || to.path === "/profile") && role === "Guest") {
    next("/");
  } else if ((to.path === "/" || to.name === "product-detail" || to.path === "/cart" || to.path === "/order-list") && !access_token) {
    next("/login");
  } else if ((to.path === "/" || to.name === "product-detail" || to.path === "/cart" || to.path === "/order-list") && access_token && role === "Admin") {
    next("/admin");
  } else if ((to.path === "/admin" || to.path === "/order-list-customer") && !access_token) {
    next("/login");
  } else if ((to.path === "/admin" || to.path === "/order-list-customer") && access_token && role === "Customer" && role === "Guest") {
    next("/");
  } else {
    next();
  }
})

export default router;
