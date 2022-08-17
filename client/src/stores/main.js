import { defineStore } from "pinia";
import axios from "axios";
import ServerAxios from "../apis/serverAxios";
import Swal from "sweetalert2";

export const useMain = defineStore({
  id: "main",
  state: () => ({
    isLoggedIn: false,
  }),
  actions: {
    async login(user) {
      try {
        const response = await ServerAxios.post("/users/login", {
          email: user.email,
          password: user.password,
        });
        const { access_token } = response.data;
        localStorage.setItem("access_token", access_token);
        await Swal.fire({
          title: "Success!",
          icon: "success",
          text: "Logged in succesfully",
          timer: 1500,
        });
        this.isLoggedIn = true;
      } catch (error) {
        Swal.fire({
          title: "Error!",
          icon: "error",
          text: error.response.data.message,
          timer: 1500,
        });
      }
    },
    logout() {
      localStorage.clear();
      this.isLoggedIn = false;
    },
    refreshPage() {
      if (localStorage.getItem("access_token")) {
        this.isLoggedIn = true;
      }
    },
    async register(user) {
      try {
        const response = await ServerAxios.post("/users/register", {
          email: user.email,
          password: user.password,
          role: "Visitor",
        });
        const { message } = response.data;
        await Swal.fire({
          title: "Success!",
          icon: "success",
          text: message,
          timer: 1500,
        });
        this.router.push({ name: "LoginPage" });
      } catch (error) {
        Swal.fire({
          title: "Error!",
          icon: "error",
          text: error.response.data.message,
          timer: 1500,
        });
      }
    },
  },
});
