import { defineStore } from "pinia";
import axios from "axios";
import ServerAxios from "../apis/serverAxios";

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
        this.isLoggedIn = true;
      } catch (error) {
        console.log(error);
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
  },
});
