import {createRouter, createWebHistory} from 'vue-router'


import HomePage from '../pages/HomePage.vue'
import LoginPage from '../pages/LoginPage.vue'
import RegisterPage from '../pages/RegisterPage.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:'/register',
            name: 'register',
            component: RegisterPage
        },
        {
            path:'/login',
            name: 'login',
            component: LoginPage
        },
        {
            path:'/',
            name: 'home',
            component: HomePage
        },

    ]
})

export default router

router.beforeEach((to, from, next) => {
    const access_token = localStorage.access_token;

    if(to.name === "home" && !access_token) {
        next({name: "login"})
    } else if (to.name === "login" && access_token) {
        next({name: "home"})
    } else {
        next()
    }
})

// import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: "/",
//       name: "home",
//       component: HomeView,
//     },
//     {
//       path: "/about",
//       name: "about",
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import("../views/AboutView.vue"),
//     },
//   ],
// });

// export default router;
