import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

const baseUrl = "http://localhost:3000";

export const useOtoStore = defineStore({
  id: "oto",
  state: () => ({
    user: {
      email: localStorage.getItem("email"),
      role: localStorage.getItem("role"),
      imageUrl: localStorage.getItem("imageUrl"),
    },
    isLogin: false,
    productsList: [],
    serviceList: [],
    totalAmount: 0,
    providerList: [],
    request: true,
    payToken: "",
    productRequested: [],
    serviceRequested: [],
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
        localStorage.setItem("email", login.data.user.email);
        localStorage.setItem("role", login.data.user.role);
        localStorage.setItem("imageUrl", login.data.user.imageUrl);
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
    async fetchDataById(id) {
      try {
        this.fetchDataProduct(id);
        this.fetchDataService(id);
        this.router.push(`/provider/${id}`);
      } catch (error) {
        Swal.fire(error.response.data.message);
      }
    },
    // Service part
    async fetchDataProvider() {
      try {
        const users = await axios.get(`${baseUrl}/service`, {
          headers: { access_token: localStorage.getItem("access_token") },
        });
        this.providerList = users.data;
      } catch (error) {
        Swal.fire(error.response.data.message);
      }
    },
    async fetchDataService(id) {
      try {
        const services = await axios.get(`${baseUrl}/service/${id}`, {
          headers: { access_token: localStorage.getItem("access_token") },
        });
        this.serviceList = services.data.service;
      } catch (error) {
        Swal.fire(error.response.data.message);
      }
    },
    async requestService(id) {
      try {
        const service = await axios.post(
          `${baseUrl}/request/service/${id}`,
          {},
          {
            headers: { access_token: localStorage.getItem("access_token") },
          }
        );
        Swal.fire(service.data.message);
      } catch (error) {
        Swal.fire(error.response.data.message);
      }
    },
    async fetchDataRequest() {
      try {
        const request = await axios.get(`${baseUrl}/request`, {
          headers: { access_token: localStorage.getItem("access_token") },
        });
        this.serviceRequested = request.data.service;
        this.productRequested = request.data.product;
      } catch (error) {
        Swal.fire(error.response.data.message);
      }
    },
    // Product part
    async fetchDataProduct(id) {
      try {
        const products = await axios.get(`${baseUrl}/product/${id}`, {
          headers: { access_token: localStorage.getItem("access_token") },
        });
        this.productsList = products.data.product;
      } catch (error) {
        Swal.fire(error.response.data.message);
      }
    },
    async requestProduct(id) {
      try {
        let access_token = localStorage.getItem("access_token");
        const product = await axios.post(
          `${baseUrl}/request/product/${id}`,
          {},
          {
            headers: { access_token },
          }
        );
        Swal.fire(product.data.message);
      } catch (error) {
        Swal.fire(error.response.data.message);
      }
    },
    async cancelProduct(id) {
      try {
        let access_token = localStorage.getItem("access_token");
        const product = await axios.delete(`${baseUrl}/request/product/${id}`, {
          headers: { access_token },
        });
        this.router.push("/orderlist");
      } catch (error) {
        Swal.fire(error);
      }
    },
    async cancelService(id) {
      try {
        console.log(id);
        // let access_token = localStorage.getItem("access_token");
        // const product = await axios.delete(`${baseUrl}/request/service/${id}`, {
        //   headers: { access_token },
        // });
        // this.router.push("/orderlist");
      } catch (error) {
        Swal.fire(error);
      }
    },
    // Payment part
    async requestPayment() {
      try {
        const payment = await axios.get(`${baseUrl}/request/payment`, {
          headers: { access_token: localStorage.getItem("access_token") },
        });
        window.snap.pay(payment.data.token);
      } catch (error) {
        Swal.fire(error.response.message);
      }
    },
    //
  },
});
