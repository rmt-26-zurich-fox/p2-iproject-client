import { createApp } from "vue";
import { markRaw } from "vue";
import { createPinia } from "pinia";
import "vue-toastification/dist/index.css";
import Toast, { POSITION } from "vue-toastification";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const options = {
  position: POSITION.BOTTOM_RIGHT,
  timeout: 2000,
};

const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(pinia);
app.use(router);
app.use(Toast, options);
app.mount("#app");
