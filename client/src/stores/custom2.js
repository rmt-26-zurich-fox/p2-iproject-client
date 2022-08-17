import { defineStore } from 'pinia'

export const useCustom2Store = defineStore({
  id: 'custom2',
  state: () => ({
    custom2: 0
  }),
  getters: {
    doubleCount: (state) => state.custom2 * 2
  },
  actions: {
    async addShopCart(id){
        try {

        } catch (err) {
            console.log(err)
        }
    }
}

})
  