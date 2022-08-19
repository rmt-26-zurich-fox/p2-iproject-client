import { createApp } from "vue";
import { createPinia } from "pinia";
import VueGoogleMaps from '@fawmi/vue-google-maps'

import App from "./App.vue";
import router from "./router";


const app = createApp(App);

app.use(createPinia());
app.use(router);

// app.mount("#app");

app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyCC8DuJiwmnfvfXzx4H9f_Rqt9WxP7s3iE',
    },
}).mount('#app')