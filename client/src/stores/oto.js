import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

const baseUrl = "http://localhost:3000";

export const useOtoStore = defineStore({
  id: "oto",
  state: () => ({
    user: {},
    isLogin: false,
    productsList: [],
    totalAmount: 0,
    providerList: [],
  }),
  actions: {
    // User part
    async processRegister(data) {
      try {
        const register = await axios.post(`${baseUrl}/user/register`, {
          username: data.username,
          email: data.email,
          password: data.password,
          phoneNumber: data.phoneNumber,
          address: data.address,
          role: data.role,
        });
        this.router.push("/login");
        Swal.fire("Register Success");
      } catch (error) {
        Swal.fire(error.response.statusText);
      }
    },
    async processLogin(data) {
      try {
        const login = await axios.post(`${baseUrl}/user/login`, {
          email: data.email,
          password: data.password,
        });
        localStorage.setItem("access_token", login.data.access_token);
        this.user = login.data.user;
        this.router.push("/");
        Swal.fire("Login Success");
      } catch (error) {
        console.log(error);
        Swal.fire(error.response.data.message);
      }
    },
    processLogout() {
      localStorage.clear();
      this.user = {};
      this.router.push("/login");
    },
    async fetchDataProvider() {
      try {
        const users = await axios.get(`${baseUrl}/user/provider`, {
          headers: { access_token: localStorage.getItem("access_token") },
        });
        this.providerList = users.data;
      } catch (error) {
        console.log(error);
        // Swal.fire(error.response.data.message);
      }
    },
    // Product part
    async fetchDataProduct() {
      try {
        const product = await axios.get(`${baseUrl}/product`, {
          headers: { access_token: localStorage.getItem("access_token") },
        });
        this.productList = product.data;
      } catch (error) {
        console.log(error);
        Swal.fire(error.response.data.message);
      }
    },
    async requestProduct() {
      try {
        const product = await axios.get(
          `${baseUrl}/request/product/:productId`,
          {
            headers: { access_token: localStorage.getItem("access_token") },
          }
        );
        this.productList = product.data;
      } catch (error) {
        console.log(error);
        Swal.fire(error.response.data.message);
      }
    },
    // Payment part
    async fetchBankList() {
      try {
      } catch (error) {
        Swal.fire(error.response.message);
      }
    },
    async requestPaymentDestination(data) {
      try {
        Swal.fire();
      } catch (error) {
        Swal.fire(error.response.message);
      }
    },
    //
  },
});
