import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import HomeView from '../views/HomeView.vue'
import ParentView from "../views/ParentView.vue";
import NotfoundView from "../views/NotfoundView.vue";
import TransactionView from "../views/TransactionView.vue"
import CartView from "../views/CartView.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginView,
      // beforeEnter: (to, from) => {
      //   if(localStorage.getItem("access_token")){
      //     return {name: 'home'}
      //   }
      // }
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
      // beforeEnter: (to, from) => {
      //   if(localStorage.getItem("access_token")){
      //     return {name: 'home'}
      //   }
      // }
    },
    {
      path: "/",
      component: ParentView,
      children: [
        {
          path: "",
          name: "home",
          component: HomeView,
        },
        {
          path: "/cart",
          name: "cart",
          component: CartView,
          // beforeEnter: (to, from) => {
          //   if(!localStorage.getItem("access_token")){
          //     return {name: 'home'}
          //   }
          // }
        },
        {
          path: "/transaction",
          name: "transaction",
          component: TransactionView,
        },
      ],
    },
    { path: "/:pathMatch(.*)*", component: NotfoundView },
  
    
  ],
});

export default router;
