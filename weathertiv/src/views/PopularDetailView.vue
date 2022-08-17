<template>
    <div class="hero">
        <div class="container">
        </div>
    </div>

    <!-- Daily -->
    <div class="forecast-table">
        <div class="container">
            <div class="forecast-container">
                <div class="today forecast">
                    <div class="forecast-header">
                        <div class="day">Today</div>
                        <div class="date">{{ weather.forecast.forecastday[0].date }}</div>
                    </div> <!-- .forecast-header -->
                    <div class="forecast-content">
                        <div class="location">{{ weather.location.name }}</div>
                        <div class="degree">
                            <div class="num">{{ weather.current.temp_c }}<sup>o</sup>C</div>
                            <div class="forecast-icon">
                                <img :src="weather.current.condition.icon">
                            </div>
                        </div>
                        <span><img src="../assets/images/icon-umberella.png" alt="">{{
                                weather.current.humidity
                        }}%</span>
                        <span><img src="../assets/images/icon-wind.png" alt="">{{ weather.current.wind_kph
                        }}km/h</span>
                        <span><img src="../assets/images/icon-compass.png" alt="">{{ weather.current.wind_dir
                        }}</span>
                    </div>
                </div>
                <div class="forecast">
                    <div class="forecast-header">
                        <div class="day">Tommorow</div>
                    </div> <!-- .forecast-header -->
                    <div class="forecast-content">
                        <div class="forecast-icon">
                            <img :src="weather.forecast.forecastday[1].day.condition.icon" alt="" width=48>
                        </div>
                        <div class="degree">{{ weather.forecast.forecastday[1].day.avgtemp_c }}<sup>o</sup>C
                        </div>
                    </div>
                </div>
                <div class="forecast">
                    <div class="forecast-header">
                        <div class="day">Next 2 Days</div>
                    </div> <!-- .forecast-header -->
                    <div class="forecast-content">
                        <div class="forecast-icon">
                            <img :src="weather.forecast.forecastday[2].day.condition.icon" alt="" width=48>
                        </div>
                        <div class="degree">{{ weather.forecast.forecastday[2].day.avgtemp_c }}<sup>o</sup>C
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { customStore } from '../stores/store';

export default {
    data() {
        return {
            weather: null,
        }
    },
    computed: {
        ...mapState(customStore, ["popularWeather"])
    },
    methods: {
        ...mapActions(customStore, ["fetchPopularLocationWeather"]),
    },
    async created() {
        await this.fetchPopularLocationWeather(this.$route.params.popularId)
        this.weather = await this.popularWeather
    }
}
</script>