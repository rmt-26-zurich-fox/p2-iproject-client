import router from "../router";
import { defineStore } from "pinia";
import axios from "axios"
import Swal from "sweetalert2"
export const useFoodStore = defineStore({
  id: "food",
  state: () => ({
    host: "http://localhost:3000",
    foods: [],
    bmi: {},
    bmr: {},
    fat: {},
    favourite: [],
    isLogin: false,
    isLogout: true
  }),
  actions: {
    async errorAlert({ response }) {
      if (!Array.isArray(response.data.message)) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: response.data.message,
          showConfirmButton: true,

        });
      } else {
        let message = "";
        response.data.message.forEach((err, i) => {
          message += `${i + 1}. ${err}\n`;
        });
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: message,
          showConfirmButton: true,
        });
      }
    },
    async fetchFood(page = 1, size = 8, q = "") {
      try {
        const { data } = await axios({
          method: 'get',
          url: `${this.host}/foods?page=${page}&size=${size}&q=${q}`,
        })
        this.foods = data
      } catch (error) {
        this.errorAlert(error)
      }
    },
    async bmiCalculator(bmi) {
      try {
        const { data } = await axios({
          method: 'post',
          url: `${this.host}/health/bmi`,
          data: { weight: bmi.weight, height: bmi.height }
        })

        this.bmi = data
      } catch (error) {
        this.errorAlert(error)
      }
    },
    async bmrCalculator(bmr) {
      try {
        const { data } = await axios({
          method: 'post',
          url: `${this.host}/health/bmr`,
          data: { weight: bmr.weight, height: bmr.height, age: bmr.age, gender: bmr.gender }
        })

        this.bmr = data
      } catch (error) {
        this.errorAlert(error)
      }
    },
    async fatCalculator(fat) {
      try {
        const { data } = await axios({
          method: 'post',
          url: `${this.host}/health/fat-percentage`,
          data: { weight: fat.weight, height: fat.height, age: fat.age, gender: fat.gender }
        })

        this.fat = data
        console.log(data);
      } catch (error) {
        this.errorAlert(error)
      }
    },
    async postLogin(email, password) {
      try {
        const { data } = await axios({
          method: 'post',
          url: `${this.host}/users/login`,
          data: { email, password }
        })
        console.log(data);
        localStorage.setItem("access_token", data.access_token)
        this.isLogin = true
        this.isLogout = false
        router.push("/")
      } catch (error) {
        this.errorAlert(error)
      }
    },
    async postRegister(register) {
      try {
        const { data } = await axios({
          method: 'post',
          url: `${this.host}/users/register`,
          data: {
            username: register.username,
            email: register.email,
            password: register.password
          }
        }).finally((_) => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Register completed',
            timer: 1000
          }).finally((_) => {
            router.push("/login")
          })
        })

      } catch (error) {
        this.errorAlert(error)
      }
    },
    async googleLogin(response) {
      try {
        const { data } = await axios({
          method: 'post',
          url: `${this.host}/users/google-sign-in`,
          headers: {
            token_google: response.credential,
          },
        })
        localStorage.setItem("access_token", data.access_token)
        this.isLogin = true
        this.isLogout = false
        router.push("/")
      } catch (error) {
        this.errorAlert(error)
      }
    },
    async fetchFavourite() {
      try {
        const { data } = await axios({
          method: 'get',
          url: `${this.host}/favourites`,
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
        this.favourite = data
      } catch (error) {
        this.errorAlert(error)
      }
    },
    async postFavourite(foodId) {
      try {
        const { data } = await axios({
          method: 'post',
          url: `${this.host}/favourites/${foodId}`,
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
        router.push("/cravings")
      } catch (error) {
        this.errorAlert(error)
      }
    },
    async deleteFavourite(id) {
      try {
        const { data } = await axios({
          method: 'delete',
          url: `${this.host}/favourites/${id}`,
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        }).then(() => {
          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          }).then(() => {
            this.fetchFavourite()
            router.push({ name: "craving" })
          })
        })
      } catch (error) {
        this.errorAlert(error)
      }
    }
  },
});
