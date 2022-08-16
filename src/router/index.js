import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/Dashboard/MainPage.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: MainPage,
		},
		{
			path: "/patchnote",
			name: "patchnote",
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import("../views/Patchnote/PagePatchnote.vue"),
		},
		{
			path: "/items",
			name: "items",
			component: () => import("../views/Patchnote/PagePatchnote.vue"),
			children: [
				{
					path: "mods",
					component: () => import("../views/Patchnote/PagePatchnote.vue"),
				},
				{
					path: "relic",
					component: () => import("../views/Patchnote/PagePatchnote.vue"),
				},
			],
		},
	],
});

export default router;
