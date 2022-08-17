import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";
import swal from "sweetalert";

const baseUrl = "http://localhost:3000";
export const useAllStore = defineStore({
  id: "useAllStore",
  state: () => ({
    counter: 0,
    isLogin: false,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },

    errorShow(err) {
      if (Array.isArray(err.response.data)) {
        console.log("masuk pertama");
        let message = err.response.data.map((m) => m).join("\n");
        swal({
          title: err.response.status + " " + err.response.statusText,
          text: message,
          icon: "error",
        });
      } else {
        swal({
          title: err.response.status + " " + err.response.statusText,
          text: err.response.data.message,
          icon: "error",
        });
      }
    },

    successShow(success) {
      swal({
        title: success.response.status + " " + success.response.statusText,
        text: success.response.data.message,
        icon: "success",
      });
    },

    async registerHandler(email, password) {
      try {
        const { data } = await axios({
          method: "post",
          url: `${baseUrl}/register`,
          data: {
            email: email,
            password: password,
          },
        });

        router.push({ name: "login" });
      } catch (error) {
        console.log(error);
        this.errorShow(error);
      }
    },
  },
});
