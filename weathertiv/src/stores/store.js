import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'
import router from '../router'

export const customStore = defineStore({
  id: 'custom',
  state: () => ({
    baseUrl: "http://localhost:3000",
    isLoading: false,
  }),
  actions: {

    // Login
    async handleLogin(email, password) {
      try {
        this.isLoading = true;
        let login = await axios.post(this.baseUrl + "/users/login",
          {
            email,
            password
          }
        );
        localStorage.setItem("access_token", login.data.access_token);
        localStorage.setItem("email", login.data.email);
        router.push({ name: "home" });
        this.isLoading = false;
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: err.response.data.message,
        })
      }
    },

    // Register
    async handleRegister(email, password, phoneNumber, location) {
      try {
        this.isLoading = true;
        let register = await axios.post(this.baseUrl + "/users/register",
          {
            email,
            password,
            phoneNumber,
            location,
          }
        )
        Swal.fire({
          icon: 'success',
          title: 'Register Success!',
          text: "Your account has been registered",
        })
          .then(() => {
            router.push({ name: "login" });
            this.isLoading = false;
          })
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: err.response.data.message,
        })
      }
    },
  }
})
