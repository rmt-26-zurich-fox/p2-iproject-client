const baseUrl = "http://localhost:3000";
import { defineStore } from "pinia";
import Swal from "sweetalert2";
import axios from "axios";
export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    isLogin: false,

  }),
  getters: {},
  actions: {
    async handleLogin(value) {
      try {
        const { email, password } = value;
        const { data } = await axios({
          method: "POST",
          url: `${baseUrl}/login`,
          data: {
            email,
            password
          }
        });
        const { access_token } = data;
        localStorage.setItem("access_token", access_token);
        localStorage.setItem("email", data.email);
        console.log("berhasil login");
        this.isLogin = true;
        this.router.push("/");
      } catch (error) {
        console.log(error);
        const msg = error.response.data.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: msg,
        });
      }
    },
    handleLogout() {
      localStorage.clear();
      this.isLogin = false;
    },
    handlesIsLogin() {
      if (localStorage.getItem("access_token")) {
        this.isLogin = true;
      }
    },
  },
});
