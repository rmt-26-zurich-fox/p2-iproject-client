import { defineStore } from 'pinia'
import axios from "axios"

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    baseUrl : "http://localhost:3000",
    tabs: '',
    name: "",
    report: [],
    totalPage: "",
    detail: ""
  }),
  actions: {

    async verifier(email){
      try {
        let data= await axios({
          method:'get',
          url: `https://verifier.meetchopra.com/verify/${email}?token=2b1e810090b21cab8a8753ec6bd1f0919ec90be6ea14ac5d381116f8700ea13cbc8dba7ff7e392b826068e5d306a7d80`
        })
        console.log(data);
      } catch (error) {
        console.log(error);
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
          console.log(this.verifier(value.email));
          this.router.push('/login')
         console.log(data);
      } catch (error) {
         console.log(error);
         
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
        console.log(data);
      } catch (error) {
        console.log(error);
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
        console.log(data);
      } catch (error) {
        console.log(error);
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
        console.log(data);
        this.fetchReport()
      } catch (error) {
        console.log(error);
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
        console.log(data);
      } catch (error) {
        console.log(error);
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
        console.log(data);
      } catch (error) {
        console.log(error);
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
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    
  }

})
