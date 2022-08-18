import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/landing',
      name: 'LandingPage',
      component: ()=> import ('../views/LandingPage.vue')
    },
    {
      path: '/',
      name: 'HomePage',
      component: ()=> import ('../views/HomePage.vue')
    },
    {
      path: '/simulate',
      name: 'Simulationpage',
      component: ()=> import ('../views/SimulationPage.vue')
    },
    {
      path: '/login',
      name: "LoginPage",
      component : () => import ('../views/LoginPage.vue')
    },
    {
      path: "/register",
      name: "RegisterPage",
      component: () => import("../views/RegisterPage.vue"),
    },
    {
      path: '/detail/:productId',
      name: "DetailPage",
      component : () => import ('../views/DetailPage.vue')
    },
    {
      path: '/cartPage',
      name: "CartPage",
      component : () => import ('../views/CartPage.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  const access_token = localStorage.getItem("access_token");
  const userEmail = localStorage.getItem("userEmail")

  if (to.path == "/cart" && (!access_token || userEmail)) next("/login");
  else if (to.path == "/login" && access_token) next("/");
  else if (to.path == "/register" && access_token) next("/");
  else next();
});

export default router
