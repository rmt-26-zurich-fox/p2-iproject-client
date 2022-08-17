import { defineStore } from "pinia";

export const useOtoStore = defineStore({
  id: "user",
  state: () => ({
    user: {},
    isLogin: false,
    productsList: [],
    totalAmount: 0,
  }),
  actions: {
    // User part
    async processLogin(data) {
      try {
        const login = await axios.post(`${baseUrl}/user/login`, {
          email: data.email,
          password: data.password,
        });
        localStorage.setItem("access_token", login.data.access_token);
        // this.fetchDataHero();
        this.user = login.data;
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
