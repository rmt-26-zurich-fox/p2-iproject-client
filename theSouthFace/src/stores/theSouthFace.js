import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

const baseUrl = "https://thesouthface.netlify.app";
export const theSouthFace = defineStore({
  id: "theSouthFace",
  state: () => ({
    products: [],
    notLoggedIn: true,
    access_token: "",
    oneProduct: [],
    cart: [],
    province: [],
    city: [],
    cost: [],
  }),
  actions: {
    async getProducts() {
      try {
        const allProducts = await axios.get(`${baseUrl}/products`);
        if (allProducts) {
          this.products = allProducts.data;
        }
      } catch (error) {
        Swal.fire("ERROR", error.response.data.message, "error")
      }
    },

    async loginUser(email, password) {
      try {
        const userLogin = await axios.post(`${baseUrl}/cust/login`, {
          email,
          password,
        });
        if (userLogin) {
          // console.log(userLogin.data.findCustomer.email);
          this.notLoggedIn = false;
          localStorage.setItem("access_token", userLogin.data.access_token);
          localStorage.setItem("userEmail", userLogin.data.findCustomer.email);
          this.access_token = localStorage.getItem("access_token");
          this.router.push({ path: "/" });
          Swal.fire("SUCCESS", "Success login", "success");
        }
      } catch (error) {
        Swal.fire("ERROR", error.response.data.message, "error");
      }
    },

    async registerUser(email, password) {
      try {
        const userRegister = await axios.post(`${baseUrl}/cust/register`, {
          email,
          password,
        });
        if (userRegister) {
          this.router.push({ path: "/login" });
          Swal.fire(
            "SUCCESS",
            "woohoo! new account ready to be used",
            "success"
          );
        }
      } catch (error) {
        Swal.fire("ERROR", error.response.data, "error");
      }
    },

    async fetchOneProduct(productId) {
      try {
        const getOneProduct = await axios.get(
          `${baseUrl}/products/${productId}`
        );

        this.oneProduct = getOneProduct.data;
        //   console.log(this.oneProduct)
      } catch (error) {
        Swal.fire("ERROR", error.response.data.message, "error");
      }
    },

    async googleLogin(response) {
      try {
        const googleUser = await axios({
          method: "POST",
          url: `${baseUrl}/cust/googleSignIn`,
          data: {
            google_token: response.credential,
          },
        });
        localStorage.setItem("access_token", googleUser.data.access_token);
        localStorage.setItem("userEmail", googleUser.data.user.email);
        this.access_token = localStorage.getItem("access_token");
        this.notLoggedIn = false;
      } catch (error) {
        Swal.fire("ERROR", error.response.data.message, "error");
      }
    },
    async addToCart(productId) {
      // console.log(localStorage.getItem("access_token"));
      try {
        const added = await axios({
          method: "POST",
          url: `${baseUrl}/cart/${productId}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
            email: localStorage.getItem("userEmail"),
            token_source: localStorage.getItem("tokenSource"),
          },
        });

        if (added) {
          Swal.fire("SUCCESS", added.data.message, "success");
        }
      } catch (error) {
        Swal.fire("ERROR", error.response.data.message, "error");
      }
    },

    async fetchAllCarts() {
      try {
        const userCart = await axios.get(`${baseUrl}/cart`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
            email: localStorage.getItem("userEmail"),
            token_source: localStorage.getItem("tokenSource"),
          },
        });
        this.cart = userCart.data;

      } catch (error) {
        Swal.fire("ERROR", error.response.data.message, "error");
      }
    },

    async removeFromCart(cartId) {
      try {
        const deleteFromCart = await axios.delete(`${baseUrl}/cart/${cartId}`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
            email: localStorage.getItem("userEmail"),
            token_source: localStorage.getItem("tokenSource"),
          },
        });
      } catch (error) {
        Swal.fire("ERROR", error.response.data.message, "error");
      }
    },

    async getEmailFromDiscord(access_token) {
      try {
        const discordEmail = await axios.get(
          `${baseUrl}/discordNyusahin?token=${access_token}`
        );
        localStorage.setItem("userEmail", discordEmail.data.email);
      } catch (error) {
        Swal.fire("ERROR", error.response.data.message, "error");
      }
    },

    async getProvince() {
      try {
        const province = await axios({
          method: "GET",
          url: `${baseUrl}/rajaongkir/province`,
        });
        // console.log(province.data);
        this.province = province.data;
      } catch (error) {
        console.log(error);
      }
    },

    async getCity() {
      try {
        const city = await axios({
          method: "GET",
          url: `${baseUrl}/rajaongkir/city`,
        });
        this.city = city.data;
        // console.log(this.city);
      } catch (error) {
        console.log(error);
      }
    },

    async getFee(destination) {
      try {
        const getcost = await axios({
          method: "post",
          url: `${baseUrl}/rajaongkir/cost`,
          data: {
            origin: 22,
            destination,
            weight:2000,
            courier:'jne',
          },
        });
        // console.log(getcost.data[0].costs[0].cost[0].value);
        Swal.fire(
          "Your delivery fee is:",
          `${(getcost.data[0].costs[0].cost[0].value)}`,
          "success"
        );
      } catch (error) {
        console.log(error);
      }
    },
  },
});
