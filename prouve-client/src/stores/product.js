import { defineStore } from "pinia";
import axios from "axios";

export const productStore = defineStore({
  id: "product",
  state: () => ({
    baseUrl: "http://localhost:3000/",
    counter: 0,
    recipes: [],
    cakes: [],
    cart: [],
    paymentToken: "",
    isLogin: false,
    recipeById: {},
    initialPage: 2,
  }),
  actions: {
    loginHandler(email, password) {
      return axios({
        method: "post",
        url: this.baseUrl + "login",
        data: {
          email,
          password,
        },
      });
    },

    register(userName, email, password, phoneNumber) {
      return axios({
        method: "post",
        url: this.baseUrl + "register",
        data: {
          userName,
          email,
          password,
          phoneNumber,
        },
      });
    },

    createCart(cakeId) {
      return axios({
        method: "post",
        url: this.baseUrl + `carts/${cakeId}`,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
    },

    async fetchCart() {
      try {
        // this.isLoading = true;
        const response = await axios({
          method: "get",
          url: this.baseUrl + "carts",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.cart = response.data;
        // this.isLoading = false;
      } catch (error) {
        console.log(error.response);
      }
    },

    async updateCart(amount, cartId) {
      try {
        // this.isLoading = true;
        const response = await axios({
          method: "patch",
          url: this.baseUrl + `carts/${cartId}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: {
            amount,
          },
        });
        this.fetchCart();
        // this.isLoading = false;
      } catch (error) {
        console.log(error.response);
      }
    },

    async deleteItem(cartId) {
      try {
        // this.isLoading = true;
        const response = await axios({
          method: "delete",
          url: this.baseUrl + `carts/${cartId}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.fetchCart();
        console.log(response.data);
        // this.isLoading = false;
      } catch (error) {
        console.log(error.response);
      }
    },

    async fetchPayment() {
      try {
        // this.isLoading = true;
        const response = await axios({
          method: "get",
          url: this.baseUrl + "payment",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.paymentToken = response.data.trans_token;
        // this.isLoading = false;
      } catch (error) {
        console.log(error.response);
      }
    },

    async removeCheckout() {
      try {
        // this.isLoading = true;
        const response = await axios({
          method: "delete",
          url: this.baseUrl + "carts",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        console.log(response.data);
        // this.isLoading = false;
      } catch (error) {
        console.log(error.response);
      }
    },

    async fetchRecipe(search) {
      try {
        const response = await axios({
          method: "get",
          url: this.baseUrl + "recipes",
          params: {
            search,
          },
        });
        this.recipes = response.data;
      } catch (error) {
        console.log(error.response);
      }
    },

    async fetchNextRecipe(page, search) {
      try {
        const response = await axios({
          method: "get",
          url: this.baseUrl + "recipes",
          params: {
            page,
            search,
          },
        });
        response.data.forEach((el) => {
          this.recipes.push(el);
        });
      } catch (error) {
        console.log(error.response);
      }
    },

    async fetchRecipeById(recipeId) {
      try {
        const response = await axios({
          method: "get",
          url: this.baseUrl + `recipes/${recipeId}`,
        });
        this.recipeById = response.data;
      } catch (error) {
        console.log(error.response);
      }
    },

    async fetchProduct(query) {
      try {
        const response = await axios({
          method: "get",
          url: this.baseUrl + "products",
          params: {
            category: query.category,
          },
        });
        this.cakes = response.data;
      } catch (error) {
        console.log(error.response);
      }
    },

    async fetchNextProduct(page, category) {
      try {
        const response = await axios({
          method: "get",
          url: this.baseUrl + "products",
          params: {
            page,
            category,
          },
        });
        response.data.forEach((el) => {
          this.cakes.push(el);
        });
      } catch (error) {
        console.log(error.response);
      }
    },
  },
});
