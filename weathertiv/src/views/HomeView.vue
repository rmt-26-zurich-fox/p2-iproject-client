<template>
  <div class="hero">
    <div class="container">
      <form action="#" class="find-location">
        <input type="text" placeholder="Find your location...">
        <input type="submit" value="Find">
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
            <div class="date">1 Jun</div>
          </div> <!-- .forecast-header -->
          <div class="forecast-content">
            <div class="location">New York</div>
            <div class="degree">
              <div class="num">19.7<sup>o</sup>C</div>
              <div class="forecast-icon">
                <img src="//cdn.weatherapi.com/weather/64x64/day/308.png">
              </div>
            </div>
            <span><img src="../assets/images/icon-umberella.png" alt="">20%</span>
            <span><img src="../assets/images/icon-wind.png" alt="">18km/h</span>
            <span><img src="../assets/images/icon-compass.png" alt="">East</span>
          </div>
        </div>
        <div class="forecast">
          <div class="forecast-header">
            <div class="day">Tommorow</div>
          </div> <!-- .forecast-header -->
          <div class="forecast-content">
            <div class="forecast-icon">
              <img src="//cdn.weatherapi.com/weather/64x64/day/308.png" alt="" width=48>
            </div>
            <div class="degree">23<sup>o</sup>C</div>
            <small>18<sup>o</sup></small>
          </div>
        </div>
        <div class="forecast">
          <div class="forecast-header">
            <div class="day">Next 2 Days</div>
          </div> <!-- .forecast-header -->
          <div class="forecast-content">
            <div class="forecast-icon">
              <img src="//cdn.weatherapi.com/weather/64x64/day/308.png" alt="" width=48>
            </div>
            <div class="degree">19.7<sup>o</sup>C</div>
            <small>18<sup>o</sup></small>
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
    }
  },
  computed: {
    ...mapState(customStore, ["popular"])
  },
  methods: {
    ...mapActions(customStore, ["fetchPopularLocations", "fetchPopularLocationWeather"]),
  },
  created() {
    this.fetchPopularLocations()
  }
}
</script>


