import { defineStore } from "pinia";
import Swal from "sweetalert2";

import { getAuth, signOut } from "firebase/auth";
import firebase from "firebase/compat/app";
import firebaseConfig from "../firebaseConfig";
firebase.initializeApp(firebaseConfig);
const auth = getAuth();

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  color: "#f2f6f5",
  background: "#36383a",
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.close);
  },
});

export const useGlobalStore = defineStore({
  id: "globalStore",
  state: () => ({
    // baseUrl: "https://movie-ku.herokuapp.com",
    baseUrl: "http://localhost:3000",
    isLoading: false,
  }),
  actions: {
    successHandler(message) {
      Toast.fire({
        icon: "success",
        title: message,
      });
    },
    errorHandler(err) {
      let message;
      if (err.response) message = err.response.data.message;
      else message = err;
      Toast.fire({
        icon: "error",
        title: message,
      });
    },
    async logout() {
      try {
        await signOut(auth);
        localStorage.clear();
        this.router.push("/login");
        this.successHandler("Logout successfully");
      } catch (error) {
        this.errorHandler(error);
      }
    },
  },
});
