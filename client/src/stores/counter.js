import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

let baseUrl = "http://localhost:3000";
export const main = defineStore({
  id: "counter",
  state: () => ({
    isLoggedIn: false,
    dataCourse: "",
    dataShoppingCart: [],
  }),
  getters: {},
  actions: {
    async register(dataRegister) {
      try {
        await axios.post(`${baseUrl}/users/register`, {
          username: dataRegister.username,
          email: dataRegister.email,
          password: dataRegister.password,
          fullName: dataRegister.phoneNumber,
          location: dataRegister.address,
        });
        this.router.push({ name: "login" });
      } catch (error) {
        Swal.fire({
          title: "Error!",
          icon: "error",
          text: error.response.data.message,
        });
      }
    },
    async login(dataLogin) {
      try {
        const response = await axios.post(`${baseUrl}/users/login`, {
          email: dataLogin.email,
          password: dataLogin.password,
        });
        const { access_token } = response.data;

        localStorage.setItem("access_token", access_token);
        localStorage.setItem("id", response.data.user.id);
        this.router.push({ name: "home" });
      } catch (error) {
        Swal.fire({
          title: "Error!",
          icon: "error",
          text: error.response.data.message,
        });
      }
    },
    logout() {
      this.isLoggedIn = false;
      localStorage.clear();
      this.router.push({ name: "home" });
    },

    async fetchCourse(page = 0, search = "") {
      try {
        const response = await axios.get(
          `${baseUrl}/courses?page=${page}&search=${search}`
        );
        this.dataCourse = response.data.response.news;
      } catch (error) {
        Swal.fire({
          title: "Error!",
          icon: "error",
          text: error.response.data.message,
        });
      }
    },

    async fetchShoppingcart() {
      try {
        let response = await axios.get(`${baseUrl}/students//shopping-cart`);
        console.log(response);
        this.dataShoppingCart = response;
      } catch (error) {
        Swal.fire({
          title: "Error!",
          icon: "error",
          text: error.response.data.message,
        });
      }
    },

    async xenditPay(amount) {
      try {
        await axios.post(`${baseUrl}/api/invoice`, { amount });
      } catch (error) {
        Swal.fire({
          title: "Error!",
          icon: "error",
          text: error.response.data.message,
        });
      }
    },
  },
});
