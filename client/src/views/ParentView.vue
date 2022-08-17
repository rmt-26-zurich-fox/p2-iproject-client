<script>
import NavBar from "../components/NavBar.vue";
import { mapWritableState } from "pinia";
import { useFoodStore } from "../stores/food";

export default {
	components: {
		NavBar,
	},
	computed: {
		...mapWritableState(useFoodStore, ["isLogin", "isLogout"]),
	},
	created() {
		if (localStorage.getItem("access_token")) {
			this.isLogin = true;
			this.isLogout = false;
		}
	},
};
</script>
<template>
	<NavBar />
	<router-view />
</template>
