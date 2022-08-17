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
                        <div class="date">{{ savedWeather.date }}</div>
                    </div> <!-- .forecast-header -->
                    <div class="forecast-content">
                        <div class="location">{{ savedWeather.location }}</div>
                        <div class="degree">
                            <div class="num">{{ savedWeather.temp }}<sup>o</sup>C</div>
                            <div class="forecast-icon">
                                <img :src="savedWeather.icon">
                            </div>
                        </div>
                        <span><img src="../assets/images/icon-umberella.png" alt="">{{
                                savedWeather.humid
                        }}</span>
                        <span><img src="../assets/images/icon-wind.png" alt="">{{ savedWeather.wind }}km/h</span>
                        <span><img src="../assets/images/icon-compass.png" alt="">{{ savedWeather.windir }}</span>
                    </div>
                </div>
                <div class="forecast">
                    <div class="forecast-header">
                        <div class="day">Tommorow</div>
                    </div> <!-- .forecast-header -->
                    <div class="forecast-content">
                        <div class="forecast-icon">
                            <img :src="savedWeather.iconnext" alt="" width=48>
                        </div>
                        <div class="degree">{{ savedWeather.tempnext }}<sup>o</sup>C
                        </div>
                    </div>
                </div>
                <div class="forecast">
                    <div class="forecast-header">
                        <div class="day">Next 2 Days</div>
                    </div> <!-- .forecast-header -->
                    <div class="forecast-content">
                        <div class="forecast-icon">
                            <img :src="savedWeather.icon2next" alt="" width=48>
                        </div>
                        <div class="degree">{{ savedWeather.temp2next }}<sup>o</sup>C
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
        ...mapState(customStore, ["savedWeather"])
    },
    methods: {
        ...mapActions(customStore, ["fetchSavedLocationWeather"]),
    },
    async created() {
        await this.fetchSavedLocationWeather(this.$route.params.savedId)
    }
}
</script>