import { defineStore } from 'pinia'
import axios from "axios"
import Swal from 'sweetalert2';

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    url: "http://localhost:3000",
    isLogin: false,
    season: "Winter",
    id: 0,
    page: 1,
    isLoading: true,
    userAge: "",
    dataAnimes: [],
    dataWinter: [],
    dataSpring: [],
    dataSummer: [],
    dataFall: [],
    dataComments: [],
    dataArts: [],
    dataPlannings: []
  }),
  actions: {
    // Register
    async register(user){
      try {
        let {data} = await axios.post(
          this.url + "/user/register",
          user
        )
        this.router.push("/login")
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message,
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    },
    // LOGIN
    async login(user){
      try {
        let { data } = await axios.post(this.url + "/user/login", user)
        localStorage.setItem("access_token", data.access_token)
        this.userAge = data.age
        this.isLogin = true
        this.router.push("/")
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message,
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    },
    // LOGOUT
    async logout(){
      this.isLogin = false
      localStorage.clear()
      this.router.push("/")
    },
    // ISLOGIN
    aldLogin() {
      this.isLogin = true
    },
    // NOTLOGIN
    yetLogin() {
      this.isLogin = false
    },
    // Fetch Carousel
    async fetchTop(){
      try {
        this.isLoading = true
        let {data} = await axios.get(this.url + "/animes/top", {}, {})
        this.dataAnimes = data
        this.isLoading = false
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message,
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    },
    // Fetch card Home
    async fetchCardHomeWinter(){
      try {
        let {data} = await axios.get(this.url + "/animes/Winter")
        this.dataWinter = data.splice(0, 6)
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message,
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    },
    async fetchCardHomeSpring(){
      try {
        let {data} = await axios.get(this.url + "/animes/Spring")
        this.dataSpring = data.splice(0, 6)
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message,
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    },
    async fetchCardHomeSummer(){
      try {
        let {data} = await axios.get(this.url + "/animes/Summer")
        this.dataSummer = data.splice(0, 6)
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message,
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    },
    async fetchCardHomeFall(){
      try {
        let {data} = await axios.get(this.url + "/animes/Fall")
        this.dataFall = data.splice(0, 6)
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message,
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    },
    // Fetch season Anime
    changePage(params){
      this.season = params
      this.fetchSeason()
    },  
    async fetchSeason(){
      this.isLoading = true
      try {
        let {data} = await axios.get(this.url + `/animes/${this.season}`)
        this.dataAnimes = data
        this.isLoading = false
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message,
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    },
    // Fetch details Anime
    async fetchDetail(id){
      try {
        let {data} = await axios.get(this.url + `/animes/details/${id}`)
        let response = await axios.get(this.url + `/comments/${id}?page=${this.page}`)

        this.dataComments = response.data
        this.router.push(`/detail/${id}`)
        this.id = +id
        this.dataAnimes = data
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message,
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    },
    // Fetch ARts
    async fetchArts(){
      try {
        this.isLoading = true
        let {data} = await axios.get(this.url + `/arts`, {headers: { access_token: localStorage.getItem("access_token") }})
        this.dataArts = data
        this.isLoading = false
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message,
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    },
    // Fetch Plannings
    async fetchPlannings(){
      try {
        let {data} = await axios.get(this.url + "/plannings", {headers: { access_token: localStorage.getItem("access_token") }})
        this.dataPlannings = data
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message,
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    },
    // Add Plannings
    async addPlannings(id){
      try {
        await axios.post(this.url + `/plannings/${id}`, {}, {headers: { access_token: localStorage.getItem("access_token") }})
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your plan has been changed',
          showConfirmButton: false,
          timer: 1500
        })
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message,
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    },
    // Delete Planning
    async deletePlanning(id){
      try {
        await axios.delete(this.url + `/plannings/${id}`, {headers: { access_token: localStorage.getItem("access_token") }})
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your plan has been changed',
          showConfirmButton: false,
          timer: 1500
        })
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message,
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    },
    // Post Comment
    async postComment(id, thread){
      try {
        await axios.post(this.url + `/comments/${id}`, 
        thread, 
        {headers: { access_token: localStorage.getItem("access_token") }
      })
      this.fetchDetail(id)
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message,
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    },
     // CHANGE PAGE
    changeComment(data, id) {
      try {
        if (data === 'prev') {
          this.page -= 1
          this.fetchDetail(id)
        } else if (data === 'next') {
          this.page += 1
          this.fetchDetail(id)
        } else {
          this.page = +data
          this.fetchDetail(id)
        }
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message,
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    },
    async handleCredentialResponse(response) {
      try {
        let user = await axios({
          method: "post",
          url: this.url + "/user/googlelogin",
          headers: {
            access_token: response.credential
          }
        })
        let access_token = user.data.access_token
        localStorage.setItem("access_token", access_token)
        this.isLogin = true
        this.router.push("/")
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.response.data.message}`,
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
    }
  }
})
