import { defineStore } from 'pinia'
import axios from 'axios'
import swal from 'sweetalert2'
import Swal from 'sweetalert2'

export const useCustomStore = defineStore({
    id: 'custom',
    state: () => ({
    baseURL: "http://localhost:3000",
    items: [],
    carts: [],
    details: {},
    histories: [],
    cartDetails: {},
    news: []




    }),
    actions: {
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
                this.router.push('/')
            } catch (error) {
                console.log(error)
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
                console.log(error)
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
                console.log(error)
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
                console.log(error)
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
            } catch (error) {
                console.log(error)
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
            } catch (error) {
                console.log(error)
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
                console.log(data)
                this.router.push('/')
            } catch (error) {
                console.log(error)
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
                console.log(error)
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
            } catch (error) {
                console.log(error)
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
                console.log(error)
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
                console.log(error)
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
               console.log(error) 
            }
        },

        async fetchNews() {
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
                console.log(error)
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

            } catch (error) {
                console.log(error)
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
                console.log(error)
            }
        },
    }
  })
  