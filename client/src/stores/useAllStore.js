import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";
import swal from "sweetalert";

const baseUrl = "http://localhost:3000";
export const useAllStore = defineStore({
  id: "useAllStore",
  state: () => ({
    isLogin: false,
    counter: 0,
    isLogin: false,
    products: [],
    carts: [],
    totalAmount: 0,
  }),

  actions: {
    errorShow(err) {
      if (Array.isArray(err.response.data)) {
        console.log("masuk pertama");
        let message = err.response.data.map((m) => m).join("\n");
        swal({
          title: err.response.status + " " + err.response.statusText,
          text: message,
          icon: "error",
        });
      } else {
        swal({
          title: err.response.status + " " + err.response.statusText,
          text: err.response.data.message,
          icon: "error",
        });
      }
    },

    successShow(message) {
      swal({
        text: message,
        icon: "success",
      });
    },

    formatRupiah(price) {
      let formattedPrice = price.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      });
      return formattedPrice;
    },

    async registerHandler(email, password) {
      try {
        const { data } = await axios({
          method: "post",
          url: `${baseUrl}/register`,
          data: {
            email: email,
            password: password,
          },
        });

        router.push({ name: "login" });
      } catch (error) {
        console.log(error);
        this.errorShow(error);
      }
    },

    async loginHandler(email, password) {
      try {
        const { data } = await axios({
          method: "post",
          url: `${baseUrl}/login`,
          data: {
            email: email,
            password: password,
          },
        });

        console.log(data);

        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("email", data.emailLoggedIn);
        localStorage.setItem("id", data.idLoggedIn);
        this.isLogin = true;
      } catch (error) {
        this.errorShow(error);
      }
    },

    async fetchAllProducts() {
      try {
        const { data } = await axios({
          method: "get",
          url: `${baseUrl}/products`,
        });

        console.log(data);
        this.products = data.products;
      } catch (error) {
        console.log(error);
        this.errorShow(error);
      }
    },

    async addProductToCart(ProductId) {
      try {
        const { data } = await axios({
          method: "patch",
          url: `${baseUrl}/carts/${ProductId}`,
          headers: { access_token: localStorage.getItem("access_token") },
        });
        console.log(data);
        // this.carts = data.carts
      } catch (error) {
        console.log(error);
        this.errorShow(error);
      }
    },

    async fetchCart() {
      try {
        const { data } = await axios({
          method: "get",
          url: `${baseUrl}/carts/`,
          headers: { access_token: localStorage.getItem("access_token") },
        });

        this.carts = data.carts;
        console.log(this.carts, "=======");
      } catch (error) {
        console.log(error);
        this.errorShow(error);
      }
    },

    async deleteCart(id) {
      try {
        const { data } = await axios({
          method: "delete",
          url: `${baseUrl}/carts/${id}`,
          headers: { access_token: localStorage.getItem("access_token") },
        });

        console.log("masuk delete=======");
        this.fetchCart();
      } catch (error) {
        console.log(error);
        this.errorShow(error);
      }
    },

    async checkOut() {
      try {
        const { data } = await axios({
          method: "patch",
          url: `${baseUrl}/transactions/checkout`,
          headers: { access_token: localStorage.getItem("access_token") },
        });
        console.log(data);
        // this.carts = data.carts
      } catch (error) {
        console.log(error);
        this.errorShow(error);
      }
    },

    async fetchTransaction() {
      try {
        const { data } = await axios({
          method: "get",
          url: `${baseUrl}/transactions`,
          headers: { access_token: localStorage.getItem("access_token") },
        });

        console.log(data, "+++++");
        this.totalAmount = Number(data.totalAmount[0].totalPriceAll);
        console.log(this.totalAmount, "=======");
      } catch (error) {
        console.log(error);
        this.errorShow(error);
      }
    },

    async payment() {
      try {
        const { data } = await axios({
          method: "patch",
          url: `${baseUrl}/transactions`,
          headers: { access_token: localStorage.getItem("access_token") },
        });

        console.log(data);
        this.successShow(data.message);
        this.totalAmount = 0;
      } catch (error) {
        console.log(error);
        this.errorShow(error);
      }
    },
  },
});
