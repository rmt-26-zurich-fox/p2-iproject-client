import { defineStore } from 'pinia'
import axios from "axios"
import Swal from 'sweetalert2'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    baseUrl : "https://court-application.herokuapp.com",
    tabs: '',
    name: "",
    report: [],
    totalPage: "",
    detail: "",
    hasilAdd: ""
  }),
  actions: {
    async handleLoginGoogle(response) {
      try {
        let {data}= await axios({
         method: 'post',
         url: `${this.baseUrl}/google-sign-in`,
         headers:{
           token_google: response.credential
         }
        })
       localStorage.setItem("access_token",data.access_token)
       localStorage.setItem("name",data.name)
       this.name= localStorage.getItem("name")
       this.router.push('/')
        this.fetchReport()
        this.tabs= 'login'
        Swal.fire({
          icon: 'Success',
          title: 'Login Succeed',
          text: 'Enjoy Your Day'
      })
      } catch (error) {
        console.log(error);
          Swal.fire({
              icon: 'error',
              title: 'Cannot Login',
              text: error.response.data.message
          })
      }
    
     },

    async verifier(email){
      try {
        let data= await axios({
          method:'get',
          url: `https://verifier.meetchopra.com/verify/${email}?token=2b1e810090b21cab8a8753ec6bd1f0919ec90be6ea14ac5d381116f8700ea13cbc8dba7ff7e392b826068e5d306a7d80`
        })
        // console.log(data);
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: `Failed Register`,
          text: error.response.data.message
        })
      }
    },

    async handlerRegister(value){
      try {
          let {data}= await axios({
              method: 'post',
              url: `${this.baseUrl}/register`,
              data:{
                  username: value.username,
                  email: value.email,
                  address: value.address,
                  phoneNumber: value.phoneNumber,
                  password: value.password
              }
          })
          // console.log(this.verifier(value.email));
          this.router.push('/login')
        //  console.log(data);
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: `Failed Register`,
          text: error.response.data.message
        })
         
      }
  },
    
    async handlerLogin(value){
      try {
        let {data}= await axios({
          method:'post',
          url: `${this.baseUrl}/login`,
          data:{
            email: value.email,
            password: value.password
          }
        })
        localStorage.setItem("access_token", data.access_token)
        localStorage.setItem("name", data.name)
        this.router.push('/')
        this.tabs= 'login'
        this.name= localStorage.getItem("name")
        // console.log(data);
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: `Failed Login`,
          text: error.response.data.message
        })
      }
    },
    async fetchReport(value){
      try {
        let {data}= await axios({
          method: 'get',
          url : `${this.baseUrl}/reports`,
          headers: {
            access_token: localStorage.getItem("access_token")
          },
          params: value
        })
        this.report= data
        this.totalPage= data.totalPages
        // console.log(data);
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: `Failed Fetch Report`
        })
      }
    },
    async reportDelete(id){
      try {
        let data= await axios({
          method: 'delete',
          url: `${this.baseUrl}/reports/${id}`,
          headers:{
            access_token : localStorage.getItem("access_token")
          }
        })
        Swal.fire({
          icon: 'success',
          title: `success delete id ${id}`
        })
        this.fetchReport()
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: `Failed Delete`,
          text: error.response.data.message
        })
      }
    },
    async reportDetail(id){
      try {
        let {data}= await axios({
          method: 'get',
          url: `${this.baseUrl}/reports/${id}`,
          headers:{
            access_token: localStorage.getItem("access_token")
          }
        })
        this.fetchReport()
        this.detail= data
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: `Failed Find Detail`,
          text: error.response.data.message
        })
      }
    },
    async update(id,value){
      try {
        let {data}= await axios({
          method: 'put',
          url: `${this.baseUrl}/reports/${id}`,
          headers:{
            access_token: localStorage.getItem("access_token")
          },
          data:{
            imageUrl: value.imageUrl,
            name: value.name,
            CategoryId: value.Category
          }
        })
        this.fetchReport()
        Swal.fire({
          icon: 'success',
          title: `Success edit id ${id}`,
          text: data.message
        })
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: `Failed To Update`,
          text: error.response.data.message
        })
      }
    },
    async addReport (value){
      try {
        let {data} = await axios ({
          method: 'post',
          url: `${this.baseUrl}/reports`,
          headers:{
            access_token: localStorage.getItem("access_token")
          },
          data:{
            imageUrl: value.imageUrl,
            name: value.name,
            CategoryId: value.CategoryId
          }
        })
        return data
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: `Failed To Add`,
          text: error.response.data.message
        })
      }
    }
  }

})
