import { defineStore } from 'pinia'
import axios from "axios"

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    baseUrl : "http://localhost:3000"
    
  }),
  actions: {
    async hanndlerLogin(value){
      try {
        let {data}= await axios({
          method:'post',
          url: `${this.baseUrl}/login`,
          data:{
            username: value.username,
            password: value.password
          }
        })
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    
  }
})
