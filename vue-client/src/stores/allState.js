import { defineStore } from "pinia";
import Swal from "sweetalert2";
import axios from "axios";

const baseUrl = "http://localhost:3000";

export const useAllStateStore = defineStore({
  id: "allState",
  state: () => ({
    isLoggedIn: false,
    myProfile: [],
    clubs: [],
    clubDetail: [],
    leaderboards: [],
    pagination: {
      currentPage: 0,
      totalPages: 0,
    },
  }),
  actions: {
    async postLoginHandler(loginForm) {
      try {
        
        const response = await axios.post(`${baseUrl}/login`, {
          email: loginForm.email,
          password: loginForm.password,
        });
        console.log(response);
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("firstName", response.data.firstName);
        localStorage.setItem("lastName", response.data.lastName);

        this.isLoggedIn = true;

        this.router.push("/");

        this.sweetAlert("Signed in successfully");

      } catch (err) {
        console.log(err);
        this.sweetAlert(err.response.data.message, "error");

      }
    },
    async postRegisterHandler(registerForm) {
      try {

        await axios.post(`${baseUrl}/register`, {
          email: registerForm.email,
          password: registerForm.password,
          firstName: registerForm.firstName,
          lastName: registerForm.lastName,
          birthDate: registerForm.birthDate,
        });

        this.router.push("/login");

        this.sweetAlert("Success register", "success", "center");
        
      } catch (err) {
        
        console.log(err);
        this.sweetAlert(err.response.data.message, "error");
        
      }
    },
    loginCheck() {
      
      if (localStorage.getItem("access_token")) {
        
        this.isLoggedIn = true;
      }

    },
    logoutHandler() {

      localStorage.clear();

      this.isLoggedIn = false;

      this.sweetAlert("Logged out successfully");

    },
    async fetchMyProfile() {
      try {
        const response = await axios.get(`${baseUrl}/profile`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          params: {
          },
        });

        this.myProfile = response.data.myProfile;

      } catch (err) {
        console.log(err);
        this.sweetAlert(err.response.data.message, "error");

      }
    },
    async fetchLeaderboards() {
      try {
        const response = await axios.get(`${baseUrl}/leaderboards`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });

        this.leaderboards = response.data.leaderboards;

      } catch (err) {
        console.log(err);
        this.sweetAlert("error", "error");

      }
    },
    sweetAlert(message, icon = "success", position = "top-end") {
      const Toast = Swal.mixin({
        toast: true,
        position: position,
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: icon,
        title: message,
      });
    }
  }
});