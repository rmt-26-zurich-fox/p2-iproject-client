<template>
  <div
    class="flex flex-col items-center mx-auto bg-white rounded-lg border shadow-md flex-row w-3/5 hover:bg-gray-100 mb-10">
    <div class="flex items-center justify-between gap-12 bg-cover">
      <img class="h-72 w-72" :src="weathericon" alt="" srcset="">
    </div>
    <h5 class="mb-2 text-5xl font-bold tracking-tight text-gray-900 text-center">{{ detailstate.country }}</h5>
    <h1
      class="inline-block bg-white bg-opacity-0 rounded-full px-3 py-1 text-3xl font-semibold text-gray-700 mr-2 mb-2 self-center">
      #{{ detailstate.city }}</h1>
    <h2 class="text-2xl">{{ detailstate.state }}</h2>
    <h2>{{ convertDate }}</h2>
    <div class="justify-center text-center self-center">
      <label for="">Temperature:</label>
      <h1 class="text-xl">{{ detailstate.current.weather.tp }}°C</h1>
    </div>
    <label for="">US AQI:</label>
    <h1>{{ detailstate.current.pollution.aqius }}* {{ AqiStatus }}</h1>
    <label for="">Humidity:</label>
    <h1>{{ detailstate.current.weather.hu }}%</h1>
    <label for="">Wind Speed:</label>
    <h1>{{ this.detailstate.current.weather.ws }} km/h</h1>
    <label for="">Pressure:</label>
    <h1>{{ this.detailstate.current.weather.pr }} mb</h1>
    <div class="flex flex-col justify-between p-4 leading-normal">
      <p class="mb-3 font-normal text-gray-700 text-justify">{{ }}</p>
    </div>
    <div>
      <ButtomUsage nameButton="Add To My Bookmark" @click="createBookmark()" />
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';
import ButtomUsage from '../components/ButtomUsage.vue';
export default {
  computed: {
    ...mapState(useCounterStore, ["detailstate"]),
    convertDate() {
      let date = new Date().toJSON(this.detailstate.current.weather.ts).slice(0, 10).replace(/-/g, "/");
      return date;
    },
    weathericon() {
      if (this.detailstate.current.weather.ic === "01d") {
        return "https://www.airvisual.com/images/01d.png";
      }
      else if (this.detailstate.current.weather.ic === "01n") {
        return "https://www.airvisual.com/images/01n.png";
      }
      else if (this.detailstate.current.weather.ic === "02d") {
        return "https://www.airvisual.com/images/02d.png";
      }
      else if (this.detailstate.current.weather.ic === "02n") {
        return "https://www.airvisual.com/images/02n.png";
      }
      else if (this.detailstate.current.weather.ic === "03d") {
        return "https://www.airvisual.com/images/03d.png";
      }
      else if (this.detailstate.current.weather.ic === "04d") {
        return "https://www.airvisual.com/images/04d.png";
      }
      else if (this.detailstate.current.weather.ic === "09d") {
        return "https://www.airvisual.com/images/09d.png";
      }
      else if (this.detailstate.current.weather.ic === "10d") {
        return "https://www.airvisual.com/images/10d.png";
      }
      else if (this.detailstate.current.weather.ic === "10n") {
        return "https://www.airvisual.com/images/10n.png";
      }
      else if (this.detailstate.current.weather.ic === "11d") {
        return "https://www.airvisual.com/images/11d.png";
      }
      else if (this.detailstate.current.weather.ic === "13d") {
        return "https://www.airvisual.com/images/13d.png";
      }
      else {
        return "https://www.airvisual.com/images/50d.png";
      }
    },
    weatherDescription() {
      if (this.detailstate.current.weather.ic === "01d") {
        return "clear sky (day)";
      }
      else if (this.detailstate.current.weather.ic === "01n") {
        return "clear sky (night)";
      }
      else if (this.detailstate.current.weather.ic === "02d") {
        return "few clouds (day)";
      }
      else if (this.detailstate.current.weather.ic === "02n") {
        return "few clouds (night)";
      }
      else if (this.detailstate.current.weather.ic === "03d") {
        return "scattered clouds";
      }
      else if (this.detailstate.current.weather.ic === "04d") {
        return "broken clouds";
      }
      else if (this.detailstate.current.weather.ic === "09d") {
        return "shower rain";
      }
      else if (this.detailstate.current.weather.ic === "10d") {
        return "rain (day time)";
      }
      else if (this.detailstate.current.weather.ic === "10n") {
        return "rain (night time)";
      }
      else if (this.detailstate.current.weather.ic === "11d") {
        return "thunderstorm";
      }
      else if (this.detailstate.current.weather.ic === "13d") {
        return "snow";
      }
      else {
        return "mist";
      }
    },
    AqiStatus() {
      if (this.detailstate.current.pollution.aqius <= 50) {
        return "Good";
      }
      else if (this.detailstate.current.pollution.aqius <= 100) {
        return "Moderate";
      }
      else if (this.detailstate.current.pollution.aqius <= 150) {
        return "Unhealthy for sensitive groups";
      }
      else if (this.detailstate.current.pollution.aqius <= 200) {
        return "Unhealthy";
      }
      else if (this.detailstate.current.pollution.aqius <= 300) {
        return "Very Unhealthy";
      }
      else {
        return "Hazardous";
      }
    },
  },
  methods: {
    ...mapActions(useCounterStore, ["fetchWeather", "saveBookmark"]),
    createBookmark() {
      let obj = {
        CityName: this.detailstate.city,
        StateName: this.detailstate.state,
        CountryName: this.detailstate.country
      }
      console.log(obj)
      this.saveBookmark(obj)
    }

  },
  created() {
  },
  components: { ButtomUsage }
}
</script>
