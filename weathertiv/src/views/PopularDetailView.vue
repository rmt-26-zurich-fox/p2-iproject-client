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
                        <div class="date">{{ popularWeather.date }}</div>
                    </div> <!-- .forecast-header -->
                    <div class="forecast-content">
                        <div class="location">{{ popularWeather.location }}</div>
                        <div class="degree">
                            <div class="num">{{ popularWeather.temp }}<sup>o</sup>C</div>
                            <div class="forecast-icon">
                                <img :src="popularWeather.icon">
                            </div>
                        </div>
                        <span><img src="../assets/images/icon-umberella.png" alt="">{{
                                popularWeather.humidity
                        }}%</span>
                        <span><img src="../assets/images/icon-wind.png" alt="">{{ popularWeather.wind }}km/h</span>
                        <span><img src="../assets/images/icon-compass.png" alt="">{{ popularWeather.windir }}</span>
                    </div>
                </div>
                <div class="forecast">
                    <div class="forecast-header">
                        <div class="day">Tommorow</div>
                    </div> <!-- .forecast-header -->
                    <div class="forecast-content">
                        <div class="forecast-icon">
                            <img :src="popularWeather.iconnext" alt="" width=48>
                        </div>
                        <div class="degree">{{ popularWeather.tempnext }}<sup>o</sup>C
                        </div>
                    </div>
                </div>
                <div class="forecast">
                    <div class="forecast-header">
                        <div class="day">Next 2 Days</div>
                    </div> <!-- .forecast-header -->
                    <div class="forecast-content">
                        <div class="forecast-icon">
                            <img :src="popularWeather.icon2next" alt="" width=48>
                        </div>
                        <div class="degree">{{ popularWeather.temp2next }}<sup>o</sup>C
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
    }
}
</script>