const baseUrl = "http://localhost:3000";
import { defineStore } from "pinia";
import Swal from "sweetalert2";
import axios from "axios";
export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    isLogin: false,
    dataUserLogin: {},


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
        const { access_token, id } = data;
        localStorage.setItem("access_token", access_token);
        localStorage.setItem("email", data.email);
        localStorage.setItem("id", id);
        console.log("berhasil login");
        this.isLogin = true;
        this.router.push("/");
        this.readProfilData();
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
    async handleRegister(value) {
      try {
        console.log("masuk register");
        const { username, email, password } = value;
        const { data } = await axios({
          url: `${baseUrl}/register`,
          method: "POST",
          data: {
            username, email, password
          }
        });
        console.log(data);
        this.router.push("/login");
      } catch (error) {
        console.log(error);
        const msg = error.response.data.message.join("; ");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: msg,
        });
      }
    },
    async readProfilData() {
      try {
        const id = localStorage.getItem("id");
        console.log(id);
        const response = await axios({
          url: `${baseUrl}/profile/${id}`,
          method: "GET",
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        });
        this.dataUserLogin = response.data;
        console.log(this.dataUserLogin.user);
      } catch (error) {
        console.log(error);
      }
    }
  },
});
