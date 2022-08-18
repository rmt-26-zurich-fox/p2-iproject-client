import { defineStore } from 'pinia'

import axios from 'axios'
import Swal from 'sweetalert2'
export const useCustom1Store = defineStore({
  id: 'custom',
  state: () => ({
    url: 'http://localhost:3000',
    products: [],
    totalPages: 0,
    product: {},
    isLogin: false,
    user: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    async fetchProduct(page,  search){
        this.loading()
        try {
            let { data } = await axios({
                url: `${this.url}/products`,
                method: "GET",
                params: { page : page, search: search}
            })
            this.products = data.products.rows
            this.totalPages = data.totalPages
            Swal.close()
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
            this.loading()
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
                this.user = {
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
            this.errAlert(err)
        }
    },
    async handleCredential(response){
        try{
            const { data } = await axios({
              url:`${this.url}/google-sign-in`,
              method:"POST",
              headers:{access_token: response.credential}
            })
              if(data){
                  localStorage.setItem("access_token", data.access_token)
                  this.customer = {
                    id: data.id,
                  }
                  
  
              await this.fetchProduct()
              this.router.push(`/`)
                  }
          }catch(err){
            this.errAlert(err)
          }
    },

    async register(userData){
        try {
            this.loading()
            const {data} = await axios({
                url: `${this.url}/register`,
                method: 'POST',
                data: userData
            })

            if(data){
                localStorage.setItem("access_token", data.access_token)
                this.user = {
                  id: data.id,
                }
            await this.fetchProduct()
            this.router.push(`/`)
        }
        } catch (err) {
            this.errAlert(err)
        }
    },
      errAlert(err){
        console.log(err.response)
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data,
          })
      },
      loading(){
        Swal.fire({
            position: 'center',
            title: 'Loading',
            showConfirmButton: false,
            didOpen: () => {
                Swal.showLoading()
            }
      })
    }
  },
})