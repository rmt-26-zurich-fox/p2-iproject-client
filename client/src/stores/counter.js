import { defineStore } from 'pinia'
import axios from 'axios'
export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    baseUrl: "http://localhost:3000",
    isLogin: false,
    //fetch state
    liststate: [],
    //detail weather
    detailstate: [],
    //fetch mybookmarks
    listbookmarks: [],
    //fetch news
    newslist: []
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
        this.fetchMybookmark
        this.router.push('/bookmark')
      } catch (error) {
        console.log(error.response.data.message)
      }
    },
    async fetchMybookmark() {
      try {
        const { data } = await axios({
          method: "GET",
          url: this.baseUrl + "/bookmarks",
          headers: {
            access_token: localStorage.getItem("access_token")
          },
        })
        this.listbookmarks = data.data
      } catch (error) {
        console.log(error.response.data.message)
      }
    },
    async deleteBookmark(id) {
      try {
        await axios({
          method: "DELETE",
          url: this.baseUrl + `/bookmarks/${id}`,
          headers: {
            access_token: localStorage.getItem("access_token")
          },
        })
        this.router.push('/bookmark')
      } catch (error) {
        console.log(error.response.data.message)
      }
    },
    async fetchnews() {
      try {
        const { data } = await axios({
          method: "GET",
          url: "https://newsapi.org/v2/top-headlines?country=id&apiKey=4b80c7136d234956a67d77a967037c60",
        })
        console.log(data)
        this.newslist = data.articles
      } catch (error) {
        console.log(error.response.data.message)
      }
    },
    async googleLog() {
      try {
        let { data } = await axios({
          method: "POST",
          url: this.baseUrl + "/google-login",
          headers: {
            token_google: response.credential
          }
        })
        localStorage.setItem("access_token", data.access_token);
        this.isLoggedIn = true
        await this.fetchState()
        await this.fetchnews()
        this.router.push('/')
      } catch (error) {
        console.log(error.response.data.message)
      }
    }
  }
})
