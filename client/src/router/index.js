import { createRouter, createWebHistory } from "vue-router";
import { useMain } from "../stores/main";
import { createApp } from "vue";
import App from "../App.vue";
import { createPinia } from "pinia";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import CreateProfilePage from "../views/CreateProfilePage.vue";
import HomeView from "../views/HomeView.vue";
import TeamDetailPage from "../views/TeamDetailPage.vue";
import NewsPage from "../views/NewsPage.vue";
import FavoritePage from "../views/FavoritePage.vue";
import CreateThread from "../views/CreateThread.vue";
import ThreadList from "../views/ThreadList.vue";
import ThreadDetail from "../views/ThreadDetail.vue";
import NotFoundPage from "../views/NotFoundPage.vue";
import Swal from "sweetalert2";

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "LoginPage",
      component: LoginPage,
      beforeEnter: async (to, from, next) => {
        const mainData = useMain();
        mainData.refreshPage();
        if (mainData.isLoggedIn === false) {
          await Swal.fire({
            title: "Loading",
            timer: 1200,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
            },
          });
          next();
        } else {
          await Swal.fire({
            title: "Error!",
            icon: "error",
            text: "You're already logged in!",
            timer: 1500,
          });
          next({ name: "HomePage" });
        }
      },
    },
    {
      path: "/register",
      name: "RegisterPage",
      component: RegisterPage,
      beforeEnter: async (to, from, next) => {
        const mainData = useMain();
        mainData.refreshPage();
        if (mainData.isLoggedIn === false) {
          await Swal.fire({
            title: "Loading",
            timer: 1200,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
            },
          });
          next();
        } else {
          await Swal.fire({
            title: "Error!",
            icon: "error",
            text: "You're already logged in!",
            timer: 1500,
          });
          next({ name: "HomePage" });
        }
      },
    },
    {
      path: "/",
      name: "HomePage",
      component: HomeView,
      beforeEnter: async (to, from, next) => {
        const mainData = useMain();
        mainData.refreshPage();
        if (mainData.isLoggedIn === true) {
          await Swal.fire({
            title: "Loading",
            timer: 1200,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
            },
          });
          next();
        } else {
          // await Swal.fire({
          //   title: "Error!",
          //   icon: "error",
          //   text: "Please log in to access app features!",
          //   timer: 1500,
          // });
          next({ name: "LoginPage" });
        }
      },
    },
    {
      path: "/profile",
      name: "ProfilePage",
      component: CreateProfilePage,
      beforeEnter: async (to, from, next) => {
        const mainData = useMain();
        mainData.refreshPage();
        if (mainData.isLoggedIn === true) {
          await Swal.fire({
            title: "Loading",
            timer: 1200,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
            },
          });
          next();
        } else {
          await Swal.fire({
            title: "Error!",
            icon: "error",
            text: "Please log in to access app features!",
            timer: 1500,
          });
          next({ name: "LoginPage" });
        }
      },
    },
    {
      path: "/teams/:id",
      name: "TeamDetail",
      component: TeamDetailPage,
      beforeEnter: async (to, from, next) => {
        const mainData = useMain();
        mainData.refreshPage();
        if (mainData.isLoggedIn === true) {
          await Swal.fire({
            title: "Loading",
            timer: 1200,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
            },
          });
          next();
        } else {
          await Swal.fire({
            title: "Error!",
            icon: "error",
            text: "Please log in to access app features!",
            timer: 1500,
          });
          next({ name: "LoginPage" });
        }
      },
    },
    {
      path: "/teams/:id/news",
      name: "NewsPage",
      component: NewsPage,
      beforeEnter: async (to, from, next) => {
        const mainData = useMain();
        mainData.refreshPage();
        if (mainData.isLoggedIn === true) {
          await Swal.fire({
            title: "Loading",
            timer: 1200,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
            },
          });
          next();
        } else {
          await Swal.fire({
            title: "Error!",
            icon: "error",
            text: "Please log in to access app features!",
            timer: 1500,
          });
          next({ name: "LoginPage" });
        }
      },
    },
    {
      path: "/favourites",
      name: "FavoritePage",
      component: FavoritePage,
      beforeEnter: async (to, from, next) => {
        const mainData = useMain();
        mainData.refreshPage();
        if (mainData.isLoggedIn === true) {
          await Swal.fire({
            title: "Loading",
            timer: 1200,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
            },
          });
          next();
        } else {
          await Swal.fire({
            title: "Error!",
            icon: "error",
            text: "Please log in to access app features!",
            timer: 1500,
          });
          next({ name: "LoginPage" });
        }
      },
    },
    {
      path: "/threads",
      name: "ParentThread",
      children: [
        {
          path: "create",
          name: "CreateThread",
          component: CreateThread,
          beforeEnter: async (to, from, next) => {
            const mainData = useMain();
            mainData.refreshPage();
            if (mainData.isLoggedIn === true) {
              await Swal.fire({
                title: "Loading",
                timer: 1200,
                timerProgressBar: true,
                didOpen: () => {
                  Swal.showLoading();
                },
              });
              next();
            } else {
              await Swal.fire({
                title: "Error!",
                icon: "error",
                text: "Please log in to access app features!",
                timer: 1500,
              });
              next({ name: "LoginPage" });
            }
          },
        },
        {
          path: "",
          name: "ThreadList",
          component: ThreadList,
          beforeEnter: async (to, from, next) => {
            const mainData = useMain();
            mainData.refreshPage();
            if (mainData.isLoggedIn === true) {
              await Swal.fire({
                title: "Loading",
                timer: 1200,
                timerProgressBar: true,
                didOpen: () => {
                  Swal.showLoading();
                },
              });
              next();
            } else {
              await Swal.fire({
                title: "Error!",
                icon: "error",
                text: "Please log in to access app features!",
                timer: 1500,
              });
              next({ name: "LoginPage" });
            }
          },
        },
        {
          path: ":id",
          name: "ThreadDetail",
          component: ThreadDetail,
          beforeEnter: async (to, from, next) => {
            const mainData = useMain();
            mainData.refreshPage();
            if (mainData.isLoggedIn === true) {
              await Swal.fire({
                title: "Loading",
                timer: 1200,
                timerProgressBar: true,
                didOpen: () => {
                  Swal.showLoading();
                },
              });
              next();
            } else {
              await Swal.fire({
                title: "Error!",
                icon: "error",
                text: "Please log in to access app features!",
                timer: 1500,
              });
              next({ name: "LoginPage" });
            }
          },
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFoundPage,
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
