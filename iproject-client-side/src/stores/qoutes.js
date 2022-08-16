import { defineStore } from 'pinia'
import axios from 'axios'
import { io } from 'socket.io-client';
// import swall from 'sweetalert'

export const useQuoteStore = defineStore({
  id: 'quotes',
  state: () => ({

    baseUrl: 'http://localhost:4000',

    loginValue: {
      email: '',
      password: ''
    },

    allQuotes: [],
    allProgramming: [],
    allAnime: [],

  }),

  actions: {

    async loginHandle(value){

      this.loginValue = value

      try {

        const { data } = await axios({
          method: 'post',
          url: this.baseUrl + '/users/login',
          data: {
            email: this.loginValue.email,
            password: this.loginValue.password
          }
        })

        console.log(data, 'successs login')
        // swall('Success', "welcome", 'success')
        localStorage.setItem('access_token', data.access_token)
        localStorage.setItem('username', data.username)
        this.router.push('/home')

      } catch (error) {

        // swall('Error', error, 'error')
        console.log(error)
        
      }

    },

    async handleRegister(){},

    async fetchQuotes(){

      try {

        const { data } = await axios({
          method: 'get',
          url: this.baseUrl + '/quotes',
        })

        console.log(data, 'success')

        this.allQuotes = data
        
      } catch (error) {

        console.log(error)
        
      }
    },


    async fetchProgramming(){

      try {

        const { data } = await axios({
          method: 'get',
          url: this.baseUrl + '/programming',
          headers: {
            access_token: localStorage.access_token
          }
        })

        console.log(data, 'programming')

        this.allProgramming = data
        
      } catch (error) {

        console.log(error)
        
      }
    },

    async fetchAnime(){

      try {
        
        const { data } = await axios({
          method: 'get',
          url: this.baseUrl + '/anime',
          headers: {
            access_token: localStorage.access_token
          }
        })

        console.log(data, 'succes naim')
        this.allAnime = data
      } catch (error) {

        console.log(error )
        
      }

    },


    
      setupSocketConnection(value) {  
        
        // console.log(value)

        this.socket = io('http://localhost:4000');  
        
        this.socket.emit('my message', value.message);

        this.socket.on('my broadcast', (data) => {
            console.log(data);
        });
    
    }
  }
})
