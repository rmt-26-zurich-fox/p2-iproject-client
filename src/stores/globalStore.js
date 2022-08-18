import { defineStore } from "pinia";
import Swal from "sweetalert2";

import firebaseConfig from "../firebaseConfig";
import firebase from "firebase/compat/app";
firebase.initializeApp(firebaseConfig);
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

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
    baseUrl: "http://localhost:3000",
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
    socialMediaLogin(cb) {
      const ui = new firebaseui.auth.AuthUI(firebase.auth());

      const uiConfig = {
        signInFlow: "popup",
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.GithubAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
          signInSuccessWithAuthResult: function (authResult) {
            cb(authResult);
            ui.delete()
            return false;
          },
          uiShown: function () {
            document.getElementById("loader").style.display = "none";
          },
        },
      };

      ui.start("#firebaseui-auth-container", uiConfig);
    },
  },
});
