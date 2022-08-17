<template>
  <div class="hero">
    <div class="container">
      <form action="#" class="find-location">
        <input type="text" placeholder="Find your location..." v-model="location">
        <button class="save" @click.prevent="submitSave" v-if="token">Save</button>
        <button class="find" @click.prevent="submitFind">Find</button>
      </form>
    </div>
  </div>

  <!-- Daily -->
  <div class="forecast-table">
    <div class="container">
      <div class="forecast-container">
        <div class="today forecast">
          <div class="forecast-header">
            <div class="day">Today</div>
            <div class="date">{{ ipWeather.date }}</div>
          </div> <!-- .forecast-header -->
          <div class="forecast-content">
            <div class="location">{{ ipWeather.location }}</div>
            <div class="degree">
              <div class="num">{{ ipWeather.temp }}<sup>o</sup>C</div>
              <div class="forecast-icon">
                <img :src="ipWeather.icon">
              </div>
            </div>
            <span><img src="../assets/images/icon-umberella.png" alt="">{{ ipWeather.humid }}</span>
            <span><img src="../assets/images/icon-wind.png" alt="">{{ ipWeather.wind }}km/h</span>
            <span><img src="../assets/images/icon-compass.png" alt="">{{ ipWeather.windir }}</span>
          </div>
        </div>
        <div class="forecast">
          <div class="forecast-header">
            <div class="day">Tommorow</div>
          </div> <!-- .forecast-header -->
          <div class="forecast-content">
            <div class="forecast-icon">
              <img :src="ipWeather.iconnext" alt="" width=48>
            </div>
            <div class="degree">{{ ipWeather.tempnext }}<sup>o</sup>C</div>
          </div>
        </div>
        <div class="forecast">
          <div class="forecast-header">
            <div class="day">Next 2 Days</div>
          </div> <!-- .forecast-header -->
          <div class="forecast-content">
            <div class="forecast-icon">
              <img :src="ipWeather.icon2next" alt="" width=48>
            </div>
            <div class="degree">{{ ipWeather.temp2next }}<sup>o</sup>C</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Popular location -->
  <main class="main-content">
    <div class="fullwidth-block">
      <div class="container">
        <h2 class="section-title">Popular Location</h2>
        <div class="row">
          <PopularCard v-for="location in popular" :key="location.id" :locationProp="location" />
        </div>
      </div>
    </div>
  </main> <!-- .main-content -->
</template>

<script>
import PopularCard from '../components/PopularCard.vue'
import { mapState, mapActions } from "pinia";
import { customStore } from '../stores/store';

export default {
  components: {
    PopularCard,
  },
  data() {
    return {
      token: localStorage.access_token,
      location: "",
    }
  },
  computed: {
    ...mapState(customStore, ["popular", "ipWeather", "searchWeather"])
  },
  methods: {
    ...mapActions(customStore, ["fetchPopularLocations", "fetchIpLocation", "fetchSearchLocation", "createSavedLocation"]),

    //Submit find
    async submitFind() {
      this.fetchSearchLocation(this.location)
    },

    //Submit save
    async submitSave() {
      this.createSavedLocation(this.location)
    }

  },
  created() {
    this.fetchPopularLocations()
    this.fetchIpLocation()
  }
}
</script>


