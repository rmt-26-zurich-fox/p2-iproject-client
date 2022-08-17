import { defineStore } from 'pinia'
import axios from 'axios'

export const quranStore = defineStore({
  id: 'ikan-terbang',
  state: () => ({
    baseUrl: 'http://localhost:3000/',
    surahs: []
  }),
  
  actions: {
    async fetchQuran(){
      try {
        console.log('ini di store bos')
        const fetchedData = await axios({
          method: 'GET',
          url: this.baseUrl + 'quran/'
        })
        this.surahs = fetchedData.data.data
        console.log(this.surahs)
      } catch (error) {
        console.log('ini tangkepan tdi ')
      }
    }
  }
})
