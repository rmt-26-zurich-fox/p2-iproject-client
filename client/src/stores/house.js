import { defineStore } from "pinia";
import Swal from "sweetalert2"

export const useHouseStore = defineStore({
  id: "house",
  state: () => ({}),
  actions: {
    errorHandler(error) {
      const response = error.response;
      const errorMsg = response.data.message;
      let message;

      if (Array.isArray(errorMsg)) {
        message = errorMsg.join(", ");
      } else {
        message = errorMsg;
      }
      Swal.fire({
        icon: "error",
        title: `${response.status}: ${response.statusText}`,
        text: message,
      });
    },
  },
});
