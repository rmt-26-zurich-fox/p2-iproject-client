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
        console.log(error)
      }
    }
  }
})
