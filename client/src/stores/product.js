import { defineStore } from "pinia";

export const useProductStore = defineStore({
  id: "product",
  state: () => ({
    productsList: [],
  }),
  actions: {
    async fetchDataProduct() {
      try {
        const product = await axios.get(`${baseUrl}/product`, {
          headers: { access_token: localStorage.getItem("access_token") },
        });
        this.productList = product.data;
      } catch (error) {
        console.log(error);
        Swal.fire(error.response.data.message)
      }
    },
    async requestProduct() {
      try {
        const product = await axios.get(`${baseUrl}/request/product/:productId`, {
          headers: { access_token: localStorage.getItem("access_token") },
        });
        this.productList = product.data;
      } catch (error) {
        console.log(error);
        Swal.fire(error.response.data.message)
      }
    },
  },
});
