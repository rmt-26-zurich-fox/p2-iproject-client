import { defineStore } from 'pinia'

import axios from 'axios'
export const useCustom1Store = defineStore({
  id: 'custom',
  state: () => ({
    url: 'http://localhost:3000',
    products: [],
    totalPages: 0,
    product: {}
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    async fetchProduct(page,  search){
        console.log(page)
        try {
            let { data } = await axios({
                url: `${this.url}/products`,
                method: "GET",
                params: { page : page, search: search}
            })
            this.products = data.products.rows
            this.totalPages = data.totalPages
        } catch (err) {
            console.log(err)
        }
    },
    async productDetail(id){
        try {
            let { data } = await axios({
                url: `${this.url}/products/${id}`,
                method: 'GET'
            })
            this.product = data
            this.router.push(`/product/${id}`)
        } catch (err) {
            console.log(err)
        }
    }
  }
})