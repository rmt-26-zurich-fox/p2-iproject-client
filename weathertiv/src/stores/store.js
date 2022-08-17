import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'
import router from '../router'

export const customStore = defineStore({
  id: 'custom',
  state: () => ({
    baseUrl: "http://localhost:3000",
    isLoading: false,
    popular: [],
    ipWeather: {
      date: "",
      location: "",
      temp: "",
      icon: "",
      humid: "",
      wind: "",
      windir: "",
      iconnext: "",
      tempnext: "",
      icon2next: "",
      temp2next: "",
    },
    popularWeather: {
      date: "",
      location: "",
      temp: "",
      icon: "",
      humid: "",
      wind: "",
      windir: "",
      iconnext: "",
      tempnext: "",
      icon2next: "",
      temp2next: "",
    },
    searchWeather: {
      date: "",
      location: "",
      temp: "",
      icon: "",
      humid: "",
      wind: "",
      windir: "",
      iconnext: "",
      tempnext: "",
      icon2next: "",
      temp2next: "",
    }
  }),
  actions: {
    //Google sign in
    async handleGoogleLogin(response) {
      try {
        this.isLoading = true
        let google = await axios({
          method: "post",
          url: this.baseUrl + "/users/googleSignIn",
          headers: {
            token_google: response.credential
          }
        })
        localStorage.setItem("access_token", google.data.access_token);
        localStorage.setItem("email", google.data.email);
        router.push({ name: "home" });
        this.isLoading = false
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: err.response.data.message,
        })
      }
    },

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

    //Read Popular Location
    async fetchPopularLocations() {
      try {
        this.isLoading = true
        let { data } = await axios.get(this.baseUrl + '/popular')
        this.popular = data.locations
        this.isLoading = false
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: err.response.data.message,
        })
      }
    },

    //Read Popular location weather
    async fetchPopularLocationWeather(popularId) {
      try {
        this.isLoading = true
        let { data } = await axios.get(this.baseUrl + `/popular/${popularId}`)
        this.popularWeather.date = data.forecast.forecastday[0].date
        this.popularWeather.location = data.location.name
        this.popularWeather.temp = data.current.temp_c
        this.popularWeather.icon = data.current.condition.icon
        this.popularWeather.humid = data.current.humidity
        this.popularWeather.wind = data.current.wind_kph
        this.popularWeather.windir = data.current.wind_dir
        this.popularWeather.iconnext = data.forecast.forecastday[1].day.condition.icon
        this.popularWeather.tempnext = data.forecast.forecastday[1].day.avgtemp_c
        this.popularWeather.icon2next = data.forecast.forecastday[2].day.condition.icon
        this.popularWeather.temp2next = data.forecast.forecastday[2].day.avgtemp_c
        this.isLoading = false
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: err.response.data.message,
        })
      }
    },

    //Read IPLocation
    async fetchIpLocation() {
      try {
        this.isLoading = true
        let { data } = await axios.get(this.baseUrl + '/ip')

        this.ipWeather.date = data.forecast.forecastday[0].date
        this.ipWeather.location = data.location.name
        this.ipWeather.temp = data.current.temp_c
        this.ipWeather.icon = data.current.condition.icon
        this.ipWeather.humid = data.current.humidity
        this.ipWeather.wind = data.current.wind_kph
        this.ipWeather.windir = data.current.wind_dir
        this.ipWeather.iconnext = data.forecast.forecastday[1].day.condition.icon
        this.ipWeather.tempnext = data.forecast.forecastday[1].day.avgtemp_c
        this.ipWeather.icon2next = data.forecast.forecastday[2].day.condition.icon
        this.ipWeather.temp2next = data.forecast.forecastday[2].day.avgtemp_c
        this.isLoading = false
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: err.response.data.message,
        })
      }
    },

    //Read SearchLocation
    async fetchSearchLocation(location) {
      try {
        this.isLoading = true
        let { data } = await axios({
          method: 'post',
          url: this.baseUrl + '/search',
          data: {
            name: location
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Location Found!',
        })
          .then(() => {
            this.searchWeather.date = data.forecast.forecastday[0].date
            this.searchWeather.location = data.location.name
            this.searchWeather.temp = data.current.temp_c
            this.searchWeather.icon = data.current.condition.icon
            this.searchWeather.humid = data.current.humidity
            this.searchWeather.wind = data.current.wind_kph
            this.searchWeather.windir = data.current.wind_dir
            this.searchWeather.iconnext = data.forecast.forecastday[1].day.condition.icon
            this.searchWeather.tempnext = data.forecast.forecastday[1].day.avgtemp_c
            this.searchWeather.icon2next = data.forecast.forecastday[2].day.condition.icon
            this.searchWeather.temp2next = data.forecast.forecastday[2].day.avgtemp_c
            router.push({ name: "search" });
            this.isLoading = false
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
