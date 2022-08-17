import { defineStore } from 'pinia'
import axios from 'axios'
export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    isLogin: false,
    baseUrl: "http://localhost:3000",
  }),
  actions: {
    async register(user) {
      try {
        await axios({
          method: "POST",
          url: this.baseUrl + "/register",
          data: {
            username: user.username,
            email: user.email,
            password: user.password
          }
        })
        this.router.push({ name: 'login' })
      } catch (error) {
        console.log(error.response.data.message)
      }
    },
    async login(input) {
      try {
        const { data } = await axios({
          method: "POST",
          url: this.baseUrl + "/login",
          data: input
        })
        localStorage.setItem("access_token", data.access_token)
        this.isLogin = true
        this.router.push('/')
      } catch (error) {
        console.log(error.response.data.message)
      }
    }
  }
})
