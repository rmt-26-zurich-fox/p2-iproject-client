import {
  defineStore
} from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    baseUrl: "http://localhost:3000",
    isLogin: false,
    username: "",
    categories: []
  }),
  actions: {
    parseJwt(token) {
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
        localStorage.setItem("role", payload.role);
        this.username = payload.username;
        this.isLogin = true;

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
    },
    async fetchCategories() {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/categories",
          method: "get"
        });
        this.categories = data.categories;
      } catch (error) { 
        console.log(error);
      }
    },
    handleRegister(obj) {
      // Handle before register
      Swal.fire({
        title: 'Do you want to save the changes?',
        showCancelButton: true,
        confirmButtonText: 'Save',
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const {
              data
            } = await axios({
              url: this.baseUrl + "/users/register",
              method: "post",
              data: obj
            });

            // Success Register
            await Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Register success!',
              showConfirmButton: false,
              timer: 1500
            });

            this.router.push("/login");
          } catch (error) {
            // Error bad request (null field)
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${error.response.data.error.message}`,
            });
          }
        }
      });
    },
    handleLogout() {
      localStorage.clear();
      this.isLogin = false;
      this.username = false;

      // Success Logout
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Logout Success',
        showConfirmButton: false,
        timer: 1500
      });

      this.router.push("/login");
    }
  },
});