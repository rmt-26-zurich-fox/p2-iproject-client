import { defineStore } from 'pinia'
import axios from 'axios'
import { io } from 'socket.io-client';
import swall from 'sweetalert'
import swal from 'sweetalert'

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

    favoriteQuote: [],
    qotd: {
      quote: ''
    },

    message: [],

    myMessage: [],

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
        swall('Success', "welcome", 'success')
        this.quoteOfTheDay()
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

    testing(value){
      
      // this.testingValue = value
    },

    setupSocketConnection(value) {  
        
        // console.log(value)
        
        this.socket = io('http://localhost:4000');
        
        this.message = value

        console.log(value.message, ' <<<<<<<<< my massage')

        // const data = {
        //   id: this.socket,
        //   message: value.message
        // }

        this.myMessage = value.message
        
        this.socket.emit('my message', value.message);

        value.message = ''
        
        this.socket.on('my broadcast', (data) => {
          // this.testingValue = data
          // console.log(data, 'dari server');
          // console.log(this.message, 'msg.vau')
          this.message = data
        });

        this.message = ''
        
    },

   async addFavorite(PostId){

    try {

      const { data } = await axios({
        method: 'post',
        url: this.baseUrl + '/favorites/' + PostId,
        data: {
          PostId
        },
        headers: {
          access_token: localStorage.access_token
        }
      })

      console.log('success add', data)
      swall('Success', 'Success add to Favorite', 'success')
      this.router.push('/favorites')
      
    } catch (error) {

      console.log(error)
      swall('You must login first', error.response.statusText, 'error')
      
    }

   },

   async fetchFavorite(){

    try {

        // this.entity = true
        const { data } = await axios({
            method: 'get',
            url: this.baseUrl + '/favorites',
            headers: {
                access_token: localStorage.getItem('access_token')
            }
        })

        this.favoriteQuote = data
        // this.entity = false
        console.log(data)

    } catch (error) {

        console.log(error)
    }
  },

  async deleteFavorite(id){

    try {

      await axios({
        method: 'delete',
        url: this.baseUrl + '/favorites/' + id,
        headers: {
          access_token: localStorage.access_token
        }
      })

      swal({
        title: "Are you sure?",
        text: "You will not be able to recover this Favorite anymore!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
      }).then(result => {
        swal("Deleted!", "Your file has been deleted.", "success");
        this.fetchFavorite()
        
      });
      
    } catch (error) {

      console.log(error)
      swall('Error', 'Something went wrong', 'error')
      
    }
  },

  async addQuote(value){

    try {

      const { data } = await axios({
        method: 'post',
        url: this.baseUrl + '/quotes',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          desc: value.desc,
          CategoryId: value.CategoryId
        }
      })

      console.log(data, 'success add quote')
      this.router.push('/home')
      
    } catch (error) {

      console.log(error)
      
    }

  },

  async quoteOfTheDay(){

    try {

      const { data } = await axios({
        method: 'get',
        url: this.baseUrl + '/quotes/qotd',
        headers: {
          access_token: localStorage.access_token
        }
      })



      this.qotd.quote = data.quote.body

      swal({
        title: "Quote Of To Day",
        text: this.qotd.quote,
        type: "success",
        confirmButtonText: "Cool" 
      });
      
    } catch (error) {

      console.log(error)
      
    }
  }

  }
})
