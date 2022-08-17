import {
  defineStore
} from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    baseUrl: "http://localhost:3000",
    username: "",
    role: ""
  }),
  actions: {
    parseJwt (token) {
      return JSON.parse(atob(token.split('.')[1]));
    },
    async handleLogin(obj) {
      try {
        const {
          data
        } = await axios({
          url: `${this.baseUrl}/users/login`,
          method: "post",
          data: obj
        });
        const payload = this.parseJwt(data.access_token);
        localStorage.setItem("access_token", data.access_token);
        this.username = payload.username;
        this.role = payload.role;

        // Success Login
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Login Success',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.push("/");
      } catch (error) {
        console.log(error);
        if (error.response.statusText == "Unauthorized") {
          // Error if email/password null
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${error.response.data.message}`,
          });
        } else {
          // Error if user/password invalid
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${error.response.data.error.message}`,
          });
        }
      }
    }
  },
});
