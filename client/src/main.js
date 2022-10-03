import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlTEvZH7Ny32gS_qmxQYMSKUcYquapaZw",
  authDomain: "iproject-ahmad.firebaseapp.com",
  projectId: "iproject-ahmad",
  storageBucket: "iproject-ahmad.appspot.com",
  messagingSenderId: "747655794325",
  appId: "1:747655794325:web:f96cc478225258e8aa159c",
  measurementId: "G-9BNRCWXZ6Y",
};

initializeApp(firebaseConfig);

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
