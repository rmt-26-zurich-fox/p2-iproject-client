import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    baseUrl: 'http://localhost:3000',
    dataLocation: [],
    location: {
      category: '',
      page: ''
    },
    page: 0,
    objLogin: {
      email: '',
      password: ''
    },
    objRegister: {
      username: '',
      email: '',
      password: ''
    }
  }),
  getters: {

  },
  actions: {
    async fetchData(value) {
      try {
        this.location = value
        const { data } = await axios({
          method: 'get',
          url: this.baseUrl + `/location?page=${this.location.page}&category=${this.location.category}`
        })
        this.dataLocation = data.data
        this.page = data.page
      } catch (error) {
        console.log(error)
      }
    },

    async login(payload) {
      try {
        this.objLogin = payload
        const { data } = await axios({
          method: 'post',
          url: this.baseUrl + '/login',
          data: {
            email: this.objLogin.email,
            password: this.objLogin.password
          }
        })
        localStorage.setItem('access_token', data.access_token)
        this.fetchData()
        this.router.push('/')
      } catch (error) {
        console.log(error)
      }
    },

    async register(payload) {
      try {
        this.objRegister = payload
        const { data } = await axios({
          method: 'post',
          url: this.baseUrl + '/register',
          data: {
            username: this.objRegister.username,
            email: this.objRegister.email,
            password: this.objRegister.password
          }
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
})
