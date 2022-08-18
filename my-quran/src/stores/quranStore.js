import { defineStore } from 'pinia'
import axios from 'axios'

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
    async fetchSurah(surahId){
      try {
        // console.log(this.surahId)
        const fetchedSurah = await axios({
          method: 'GET',
          url: this.baseUrl + `quran/${surahId}`
        })
        
        this.surah = fetchedSurah.data.data
        this.router.push(`/detail/${surahId}`)
      } catch (error) {
        console.log(error)
      }
    },
    navBarNavigation(){
      this.router.push('/')
    },

    handleDetail(){
      console.log('ini detailHandlers')
    }
  }
})
