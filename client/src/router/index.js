import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/shoppingcart',
      name: 'Shoppingcart',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ShopCartView.vue')
    },
    {
      path: '/payment',
      name: 'payment',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PaymentView.vue')
    },
    {
      path: '/product/:id',
      name: 'productDetail',
      component: () => import('../components/ProductDetail.vue')
    },
    {
      path: '/courier',
      name: 'courier',
      component: () => import('../views/CourierView.vue')
    }
  ]
})
router.beforeEach((to, from , next)=>{
  let token = localStorage.getItem('access_token')
  if((to.name == 'login'|| to.name == 'register') && token ){
    next('/')
  }else if((to.name == 'Shoppingcart'|| to.name == 'payment' || to.name == "courier") && !token){
    next('/login')
  }else{
    next()
  }
})
export default router
