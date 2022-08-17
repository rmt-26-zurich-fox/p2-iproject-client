import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

const baseUrl = "http://localhost:3000";
export const theSouthFace = defineStore({
  id: "theSouthFace",
  state: () => ({
    products: [],
    notLoggedIn: true,
    access_token: "",
    oneProduct:[]
  }),
  actions: {
    async getProducts() {
      try {
        const allProducts = await axios.get(`${baseUrl}/products`);
        if (allProducts) {
          this.products = allProducts.data;
        }
      } catch (error) {
        console.log(error);
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
          this.router.push({ path: "/home" });
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
            Swal.fire("SUCCESS", "woohoo! new account ready to be used", "success")
          }
        } catch (error) {
            console.log(error);
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
  },
});
