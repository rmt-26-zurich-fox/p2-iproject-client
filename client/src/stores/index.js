import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    baseUrl: 'http://localhost:3000',
    dataLocation: [],
    location: {
      category: '',
      page: ''
    },
    page: 0,
  }),
  getters: {

  },
  actions: {
    async fetchData(value) {
      try {
        console.log(value)
        this.location = value
        const { data } = await axios({
          method: 'get',
          url: this.baseUrl + `/location?page=${this.location.page}&category=${this.location.category}`
        })
        this.dataLocation = data.data
        this.page = data.page
      } catch (error) {
        console.log(error)
      }
    }
  }
})
