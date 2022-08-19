import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

// let baseUrl = "http://localhost:3000";
let baseUrl = "https://phase2projectakhir.herokuapp.com";
export const main = defineStore({
  id: "counter",
  state: () => ({
    isLoggedIn: false,
    isHome: false,
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
        this.isLoggedIn = true;
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
      Swal.fire({
        title: "Logged Out!",
        icon: "info",
        text: `You are logged out`,
      });
      this.router.push({ name: "home" });
    },

    async fetchCourse(page = 0, search = "") {
      try {
        const response = await axios.get(
          `${baseUrl}/courses?page=${page}&search=${search}`
        );
        console.log(response.data.response);
        this.dataCourse = response.data.response;
        console.log(this.dataCourse);
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
        let response = await axios.get(`${baseUrl}/students/shopping-cart`, {
          headers: { access_token: localStorage.access_token },
        });
        console.log(response.data.Course);
        this.dataShoppingCart = response.data;
        console.log(this.dataShoppingCart);
      } catch (error) {
        Swal.fire({
          title: "Error!",
          icon: "error",
          text: error.response.data.message,
        });
      }
    },

    async addToShoppingCart(courseId) {
      try {
        await axios.post(
          `${baseUrl}/students/shopping-cart/${courseId}`,
          {},
          {
            headers: { access_token: localStorage.getItem("access_token") },
          }
        );
        Swal.fire({
          title: "success!",
          icon: "success",
          text: "Item added to cart",
        });
      } catch (error) {
        Swal.fire({
          title: "Error!",
          icon: "error",
          text: error.response.data.message,
        });
      }
    },

    async deleteShoppingCart() {
      try {
        await axios.delete(`${baseUrl}/students/shopping-cart/delete`, {
          headers: { access_token: localStorage.access_token },
        });
      } catch (error) {
        Swal.fire({
          title: "Error!",
          icon: "error",
          text: error.response.data.message,
        });
      }
    },

    async midtransPay() {
      try {
        const response = await axios.get(`${baseUrl}/students/checkout`, {
          headers: { access_token: localStorage.access_token },
        });
        console.log(response.data.transaction_token);
        window.snap.pay(response.data.transaction_token, {
          onSuccess: function (result) {
            Swal.fire({
              title: "Payment success!",
              icon: "succes",
              text: result.status_message,
            });
          },
          onPending: function (result) {
            Swal.fire({
              title: "Payment pending!",
              icon: "info",
              text: result.status_message,
            });
          },
        });
      } catch (error) {
        Swal.fire({
          title: "Error!",
          icon: "error",
          text: error.response.data.message,
        });
      }
    },

    async addCourseList(courseId) {
      try {
        await axios.post(
          `${baseUrl}/students/courselist/${courseId}/add`,
          {},
          { headers: { access_token: localStorage.access_token } }
        );
      } catch (error) {
        Swal.fire({
          title: "Error!",
          icon: "error",
          text: error.response.data.message,
        });
      }
    },

    async fetchCourseList() {
      try {
        let response = await axios.get(
          `${baseUrl}/students/courselist`,

          { headers: { access_token: localStorage.access_token } }
        );
        console.log(response.data.Course);
        this.dataCourse = response.data;
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
