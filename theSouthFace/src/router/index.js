import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: ()=> import ('../views/LandingPage.vue')
    },
    {
      path: '/home',
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
      path: '/detail/:productId',
      name: "DetailPage",
      component : () => import ('../views/DetailPage.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  const access_token = localStorage.getItem("access_token");

  if (to.path == "/cart" && !access_token) next("/login");
  else if (to.path == "/login" && access_token) next("/");
  else if (to.path == "/register" && access_token) next("/");
  else next();
});

export default router
