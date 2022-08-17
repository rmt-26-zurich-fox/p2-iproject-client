import { defineStore } from 'pinia'
import axios from 'axios'
export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    isLogin: false,
    baseUrl: "http://localhost:3000",
    //fetch state
    liststate: [],
    //detail weather
    detailstate: []
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
    },
    linklogout() {
      localStorage.clear()
      this.isLogin = false
      this.router.push('/')
    },
    linklogin() {
      this.router.push('/login')
    },
    async fetchState() {
      try {
        const { data } = await axios({
          method: "GET",
          url: "http://api.airvisual.com/v2/states?country=indonesia&key=adff6230-bca9-4190-972a-219e13fb5087"
        })
        // console.log(data.data)
        this.liststate = data.data
      } catch (error) {
        console.log(error.response.data.message)
      }
    },
    async fetchWeather(input) {
      try {
        const { data } = await axios({
          method: "GET",
          url: "http://api.airvisual.com/v2/city",
          params: input
        })
        // console.log(data)
        this.detailstate = data.data
        this.router.push('/detail')
      } catch (error) {
        console.log(error.response.data.message)
      }
    },
    async saveBookmark(input) {
      try {
        await axios({
          method: "POST",
          url: this.baseUrl + "/bookmarks",
          headers: {
            access_token: localStorage.getItem("access_token")
          },
          data: input
        })
        this.router.push('/bookmark')
      } catch (error) {
        console.log(error.response.data.message)
      }
    }
  }
})
