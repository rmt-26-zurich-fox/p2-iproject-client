import { defineStore } from 'pinia'
import axios from 'axios'
import router from '../router'

export const quranStore = defineStore({
  id: 'ikan-terbang',
  state: () => ({
    baseUrl: 'http://localhost:3000/',
    surahs: [],
    surah: {},
    surahId: ''
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
    },
    async fetchSurah(){
      try {
        console.log(this.surahId)
        const fetchedSurah = await axios({
          method: 'GET',
          url: this.baseUrl + `quran/${this.surahId}`
        })
        
        this.surah = fetchedSurah.data.data
        console.log(this.surah.asma.id)
      } catch (error) {
        console.log(error)
      }
    },
    navBarNavigation(){
      console.log('ini di store quran bang')
    },

    handleDetail(){
      console.log('ini detailHandlers')
    }
  }
})
