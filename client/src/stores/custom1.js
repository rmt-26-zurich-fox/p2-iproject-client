import { defineStore } from 'pinia'

import axios from 'axios'
export const useCustom1Store = defineStore({
  id: 'custom',
  state: () => ({
    url: 'http://localhost:3000',
    products: [],
    totalPages: 0
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    async fetchProduct(){
        try {
            let { data } = await axios({
                url: `${this.url}/products?page=3`,
                method: "GET",
            })
            this.products = data.products.rows
            this.totalPages = data.totalPages
            console.log(this.products)
        } catch (err) {
            console.log(err)
        }
    }
  }
})