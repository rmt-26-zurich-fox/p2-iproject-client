import { defineStore } from "pinia";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  color: "#f2f6f5",
  background: "#36383a",
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.close);
  },
});

export const useGlobalStore = defineStore({
  id: "globalStore",
  state: () => ({
    baseUrl: "http://localhost:3000",
  }),
  actions: {
    successHandler(message) {
      Toast.fire({
        icon: "success",
        title: message,
      });
    },
    errorHandler(err) {
      let message;
      if (err.response) message = err.response.data;
      else message = err
      Toast.fire({
        icon: "error",
        title: message,
      });
    },
  },
});
