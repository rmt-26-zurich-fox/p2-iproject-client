import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    baseUrl: 'http://localhost:3000',
    dataLocation: [],
    location: {
      category: '',
      page: '',
    },
    totalPage: 0,
    objLogin: {
      email: '',
      password: ''
    },
    objRegister: {
      username: '',
      email: '',
      password: ''
    },
    myTrip: [],
    objDataById: {},
    qrcode:[]
  }),
  getters: {

  },
  actions: {
    async fetchData(value) {
      this.location = value
      try {
        this.location = value
        const { data } = await axios({
          method: 'get',
          url: this.baseUrl + `/location?page=${this.location.page}&category=${this.location.category}`
        })
        this.dataLocation = data.data
        this.totalPage = data.page
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message
        })
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
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message
        })
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
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message
        })
      }
    },

    async addFavorite(id) {
      try {
        const { data } = await axios({
          method: 'post',
          url: this.baseUrl + '/favourite/' + id,
          headers: {
            access_token: localStorage.access_token
          }
        })
        this.getMytrip()
        this.router.push('/mytrip')
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message
        })
      }
    },

    async getMytrip() {
      try {
        const data = await axios({
          method: 'get',
          url: this.baseUrl + '/favourite',
          headers: {
            access_token: localStorage.access_token
          }
        })
        this.myTrip = data.data
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message
        })
      }
    },

    async cancelTrip(id) {
      try {
        const { data } = await axios({
          method: 'delete',
          url: this.baseUrl + '/favourite',
          headers: {
            access_token: localStorage.access_token
          },
          data: { id }
        })
        Swal.fire({
          icon: 'success',
          title: 'Success Delete'
        })
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message
        })
      }
    },

    async qrCode(id) {
      try {
        const { data } = await axios({
          method: 'get',
          url: `https://api.happi.dev/v1/qrcode?data=https://chalange-w3.web.app/detail/${id}&width=&dots=000000&bg=FFFFFF&apikey=08ba957f5KkkuBtdtjTyVGWws94roIUjagxN9KqReoTe5EAvt73LiBeo`
        })
        this.qrcode = data.qrcode
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message
        })
      }
    },

    async fetchDataById(id) {
      try {
        const { data } = await axios({
          method: 'get',
          url: this.baseUrl + `/location/${id}`
        })
        this.objDataById = data
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message
        })
      }
    },

    async handleCredentialResponse(response) {
      try {
          const { data } = await axios({
              method: 'POST',
              url: this.baseUrl + '/googleg-sign-in',
              headers: {
                  token_google: response.credential
              }
          })
          localStorage.setItem('access_token', data.access_token)
          this.router.push('/')
          this.fetchData()
      } catch (error) {
          Swal.fire({
              title: "error",
              text: error.response.data.message,
              icon: "error"
          })
      }
  },
  }
})
