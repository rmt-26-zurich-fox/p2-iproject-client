import { defineStore } from 'pinia'
import axios from 'axios'
const baseUrl = "http://localhost:3000"
export const theSouthFace = defineStore({
  id: 'theSouthFace',
  state: () => ({
    products: []
  }),
  actions: {
    async getProducts(){
        const allProducts = await axios.get(`${baseUrl}/products`)
        if(allProducts){
            this.products=allProducts.data
        }
    }
  }
})
