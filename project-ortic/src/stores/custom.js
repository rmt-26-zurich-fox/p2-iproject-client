import { defineStore } from 'pinia'
import axios from 'axios'
import swal from 'sweetalert2'
import Swal from 'sweetalert2'

export const useCustomStore = defineStore({
    id: 'custom',
    state: () => ({
    // baseURL: "http://localhost:3000",
    baseURL: "https://iproject-ortic-2712.herokuapp.com",
    items: [],
    carts: [],
    details: {},
    histories: [],
    cartDetails: {},
    news: [],
    data: [],
    times: {}




    }),
    actions: {

        alertSuccess(message) {
            Swal.fire({
                icon: 'success',
                title: 'success',
                text: message
            })
        },

        alertError(err) {
            const errorMessage = err.response.data.message
            Swal.fire({
                icon: 'error',
                title: 'error',
                text: errorMessage
            })
        },

        async loginHandler(value) {
            try {
                const {data} = await axios({
                    method: "POST",
                    url: `${this.baseURL}/users/login`,
                    data: {
                        email: value.email,
                        password: value.password
                    }
                })
                localStorage.setItem('token', data.token)
                localStorage.setItem('username', data.userName)
                localStorage.setItem('role', data.role)
                this.alertSuccess(data.message)
                this.router.push('/')
            } catch (error) {
                this.alertError(error)
            }
        },

        async fetchItems() {
            try {
                const {data} = await axios({
                    method: 'GET',
                    url: `${this.baseURL}/items`
                })
                this.items = data.items

            } catch (error) {
                this.alertError(error)
            }
        },

        async fetchCart() {
            try {
                const {data} = await axios({
                    method: 'GET',
                    url: `${this.baseURL}/cart`,
                    headers: {
                        access_token: localStorage.token
                    }
                })
                let totalPrice = 0
                data.forEach(element => {
                    totalPrice = totalPrice + (element.quantity * element.Item.sellPrice)
                })

                this.carts = data
                this.cartDetails = { totalPrice }
            } catch (error) {
                this.alertError(error)
            }
        },

        async fetchDetail(id, callback = null) {
            try {
                const {data} = await axios({
                    method: 'GET',
                    url: `${this.baseURL}/items/${id}`
                })
                console.log(data)
                this.details = data
                if (callback) {
                    callback()
                }
            } catch (error) {
                this.alertError(error)
            }
        },

        async addToCart(id) {
            try {
                await axios ({
                    method: 'POST',
                    url: `${this.baseURL}/cart/${id}`,
                    headers: {
                        access_token: localStorage.token
                    }
                })
                
                this.router.push('/cart')
                this.alertSuccess()
            } catch (error) {
                this.alertError(error)
            }
        },

        async addItem(value) {
            try {
                let {data} = await axios({
                    method: 'POST',
                    url: `${this.baseURL}/items/add`,
                    data: {
                        name: value.name,
                        description: value.description,
                        buyPrice: value.buyPrice,
                        sellPrice: value.sellPrice,
                        stock: value.stock,
                        imageUrl: value.imageUrl,
                        SupplierId: value.SupplierId
                    },
                    headers: {
                        access_token: localStorage.token
                    }
                })
                this.router.push('/')
                this.alertSuccess()
            } catch (error) {
                this.alertError(error)
            }
        },

        async updateItem(id, value) {
            try {
                let {data} = await axios({
                    method: 'PUT',
                    url: `${this.baseURL}/items/${id}`,
                    data: {
                        name: value.name,
                        description: value.description,
                        buyPrice: value.buyPrice,
                        sellPrice: value.sellPrice,
                        stock: value.stock,
                        imageUrl: value.imageUrl,
                        SupplierId: value.SupplierId
                    },
                    headers: {
                        access_token: localStorage.token
                    }
                })
                this.router.push('/')
                this.alertSuccess()
            } catch (error) {
                this.alertError(error)
            }
        },

        async fetchHistory() {
            try {
                const {data} = await axios({
                    method: 'GET',
                    url: `${this.baseURL}/history/list`,
                    headers: {
                        access_token: localStorage.token
                    }
                })
                this.histories = data.history
                console.log(data)
            } catch (error) {
                this.alertError(error)
            }
        },

        async deleteItem(id) {
            try {
                await axios ({
                    method: 'DELETE',
                    url: `${this.baseURL}/items/delete/${id}`,
                    headers: {
                        access_token: localStorage.token
                    }
                })
                
                this.router.push('/')
                this.alertSuccess()
            } catch (error) {
                this.alertError(error)
            }
        },

        async deleteFromCart(id) {
            try {
                await axios ({
                    method: 'DELETE',
                    url: `${this.baseURL}/cart/${id}`,
                    headers: {
                        access_token: localStorage.token
                    }
                })
                this.fetchCart()
                this.router.push('/cart')
            } catch (error) {
                this.alertError(error)
            }
        },

        async fetchDataItemFilter(searchQuery) {
            try {
                const {data} = await axios({
                    method: 'GET',
                    url: `${this.baseURL}/items/filter?name=${searchQuery}&size=1000`
                })
                this.items = data.items.tutorials
            } catch (error) {
                this.alertError(error)
            }
        },

        async fetchDataItemPagination(page) {
            try {
                const {data} = await axios({
                    method: 'GET',
                    url: `${this.baseURL}/items/page?size=8&page=${page}`
                })
                this.items = data.items.tutorials
                this.maxPage = data.items.totalPages - 1

            } catch (error) {
                this.alertError(error) 
            }
        },

        async handleCredentialResponse(response) {
            try {
                const {data} = await axios ({
                    method: "POST",
                    url: `${this.baseURL}/users/google-login`,
                    headers: {
                        token_google: response.credential
                    }
                })
                localStorage.setItem("token", data.token)
                localStorage.setItem("username", data.userName)
                localStorage.setItem("role", data.role)
                this.router.push('/')
                this.alertSuccess()
            } catch (error) {
                this.alertError(error)
            }
        },

        async fetchNews() {
            try {
                const {data} = await axios({
                    method: 'GET',
                    url: `${this.baseURL}/news`
                })
                this.news = data.data.slice(0, 5)

            } catch (error) {
                this.alertError(error)
            }
        },

        async fetchTime() {
            try {
                const {data} = await axios({
                    method: 'GET',
                    url: `${this.baseURL}/time`
                })
                this.times = data
            } catch (error) {
                this.alertError(error)
            }
        },
    }
  })
  