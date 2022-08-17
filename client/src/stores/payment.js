import { defineStore } from "pinia";
import Swal from "sweetalert2";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    totalAmount: 0,
  }),
  actions: {
    async fetchBankList() {
      try {
      } catch (error) {
        Swal.fire(error.response.message);
      }
    },
    async requestPaymentDestination(data) {
      try {
        Swal.fire()
      } catch (error) {
        Swal.fire(error.response.message);
      }
    },
  },
});
