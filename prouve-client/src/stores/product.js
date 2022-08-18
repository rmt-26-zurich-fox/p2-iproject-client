import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

export const productStore = defineStore({
  id: "product",
  state: () => ({
    baseUrl: "https://prouvepatisserie.herokuapp.com/",
    counter: 0,
    recipes: [],
    cakes: [],
    cart: [],
    threads: [],
    replies: [],
    paymentToken: "",
    isLogin: false,
    isLoading: false,
    recipeById: {},
    threadById: {},
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

    errorHandler(error) {
      if (error.response.data.message[0] === "Invalid token") {
        Swal.fire({
          title: "Error!",
          html: error.response.data.message.join("<br>"),
          icon: "error",
          confirmButtonText: "OK",
        }).then((data) => {
          if (data.isConfirmed) {
            localStorage.clear();
            this.isLoading = false;
            this.router.push({
              name: "login",
            });
          }
        });
      } else {
        Swal.fire({
          title: "Error!",
          html: error.response.data.message.join("<br>"),
          icon: "error",
          confirmButtonText: "OK",
        });
        this.isLoading = false;
      }
    },

    async fetchCart() {
      try {
        this.isLoading = true;
        const response = await axios({
          method: "get",
          url: this.baseUrl + "carts",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.cart = response.data;
        this.isLoading = false;
      } catch (error) {
        this.errorHandler(error);
      }
    },

    async updateCart(amount, cartId) {
      try {
        this.isLoading = true;
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
        this.isLoading = false;
      } catch (error) {
        if (
          error.response.data.message[0] !== "Validation min on amount failed"
        ) {
          this.errorHandler(error);
        } else {
          this.isLoading = false;
        }
      }
    },

    async deleteItem(cartId) {
      try {
        this.isLoading = true;
        const response = await axios({
          method: "delete",
          url: this.baseUrl + `carts/${cartId}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.fetchCart();
        this.isLoading = false;
      } catch (error) {
        this.errorHandler(error);
      }
    },

    async fetchPayment() {
      try {
        this.isLoading = true;
        const response = await axios({
          method: "get",
          url: this.baseUrl + "payment",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.paymentToken = response.data.trans_token;
        this.isLoading = false;
      } catch (error) {
        this.errorHandler(error);
      }
    },

    async removeCheckout() {
      try {
        this.isLoading = true;
        const response = await axios({
          method: "delete",
          url: this.baseUrl + "carts",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.isLoading = false;
      } catch (error) {
        this.errorHandler(error);
      }
    },

    async fetchRecipe(search) {
      try {
        this.isLoading = true;
        const response = await axios({
          method: "get",
          url: this.baseUrl + "recipes",
          params: {
            search,
          },
        });
        this.recipes = response.data;
        this.isLoading = false;
      } catch (error) {
        this.errorHandler(error);
      }
    },

    async fetchNextRecipe(page, search) {
      try {
        this.isLoading = true;
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
        this.isLoading = false;
      } catch (error) {
        this.errorHandler(error);
      }
    },

    async fetchRecipeById(recipeId) {
      try {
        this.isLoading = true;
        const response = await axios({
          method: "get",
          url: this.baseUrl + `recipes/${recipeId}`,
        });
        this.recipeById = response.data;
        this.isLoading = false;
      } catch (error) {
        this.errorHandler(error);
      }
    },

    async fetchProduct(query) {
      try {
        this.isLoading = true;
        const response = await axios({
          method: "get",
          url: this.baseUrl + "products",
          params: {
            category: query.category,
          },
        });
        this.cakes = response.data;
        this.isLoading = false;
      } catch (error) {
        this.errorHandler(error);
      }
    },

    async fetchNextProduct(page, category) {
      try {
        this.isLoading = true;
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
        this.isLoading = false;
      } catch (error) {
        this.errorHandler(error);
      }
    },

    async fetchThread() {
      try {
        this.isLoading = true;
        const response = await axios({
          method: "get",
          url: this.baseUrl + "threads",
        });
        this.threads = response.data;
        this.isLoading = false;
      } catch (error) {
        this.errorHandler(error);
      }
    },

    async fetchThreadById(threadId) {
      try {
        this.isLoading = true;
        const response = await axios({
          method: "get",
          url: this.baseUrl + `threads/${threadId}`,
        });
        this.threadById = response.data;
        this.isLoading = false;
      } catch (error) {
        if (error.response.data.message[0] === "Data not found") {
          this.router.push({
            name: "shop",
          });
        } else {
          this.errorHandler(error);
        }
      }
    },

    async createThread(title, content) {
      try {
        this.isLoading = true;
        const response = await axios({
          method: "post",
          url: this.baseUrl + "threads",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: {
            title,
            content,
          },
        });
        this.fetchThread();
        this.isLoading = false;
      } catch (error) {
        this.errorHandler(error);
      }
    },

    async createReply(content, ThreadId) {
      try {
        this.isLoading = true;
        const response = await axios({
          method: "post",
          url: this.baseUrl + "replies",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: {
            content,
            ThreadId,
          },
        });
        this.fetchReply(ThreadId);
        this.isLoading = false;
      } catch (error) {
        this.errorHandler(error);
      }
    },

    async fetchReply(ThreadId) {
      try {
        this.isLoading = true;
        const response = await axios({
          method: "get",
          url: this.baseUrl + `replies/${ThreadId}`,
        });
        this.replies = response.data;
        this.isLoading = false;
      } catch (error) {
        this.errorHandler(error);
      }
    },

    async handleCredentialResponse(response) {
      console.log("masuk");
      try {
        let { data } = await axios({
          method: "post",
          url: this.baseUrl + "google-sign-in",
          headers: {
            google_token: response.credential,
          },
        });
        localStorage.setItem("access_token", data.access_token);
        await this.fetchCart();
        this.router.push({ name: "shop" });
      } catch (error) {
        this.errorHandler(error);
      }
    },
  },
});
