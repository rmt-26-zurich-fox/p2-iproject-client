import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// <== MDB ==>
import "mdb-ui-kit"; // lib

const app = createApp(App);

//! PINIA markRaw
const pinia = createPinia();
pinia.use(({ store }) => {
	store.router = markRaw(router);
});

app.use(pinia);
app.use(router);

app.mount("#app");
