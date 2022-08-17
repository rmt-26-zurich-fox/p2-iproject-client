import { defineStore } from 'pinia'

export const customStore = defineStore({
  id: 'custom',
  state: () => ({
    baseUrl: "http://localhost:3000",
    isLoading: false,
  }),
  actions: {
  }
})
