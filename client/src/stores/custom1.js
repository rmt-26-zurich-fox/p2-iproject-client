import { defineStore } from 'pinia'

import axios from 'axios'
export const useCustom1Store = defineStore({
  id: 'custom',
  state: () => ({
    url: 'http://localhost:3000',
    products: [],
    totalPages: 0,
    product: {},
    isLogin: false
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    async fetchProduct(page,  search){
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
    },
    async loginHandler(username,password, rememberMe){
        try {
            const { data } = await axios({
                url: `${this.url}/login`,
                method: "Post",
                data :{
                    username: username,
                    password: password
                }
            })
            
            if(data){
                localStorage.setItem("access_token", data.access_token)
                this.customer = {
                  id: data.id,
                }
            if(rememberMe){
                localStorage.setItem("username", username)
                localStorage.setItem("password", password)
            }else{
                localStorage.removeItem("username")
                localStorage.removeItem("password")
      
            }
            await this.fetchProduct()
            this.router.push(`/`)
        }
        } catch (err) {
            console.log(err.response)
        }
    },
    async handleCredentrial(){

    }
  },
})