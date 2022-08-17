<template>
    <div class="hero">
        <div class="container">
            <form action="#" class="find-location" @submit.prevent="submitFind">
                <input type="text" placeholder="Find your location..." v-model="location">
                <button type="submit" class="save" v-if="token">Save</button>
                <button type="submit" class="find">Find</button>
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
                        <div class="date">{{ searchWeather.date }}</div>
                    </div> <!-- .forecast-header -->
                    <div class="forecast-content">
                        <div class="location">{{ searchWeather.location }}</div>
                        <div class="degree">
                            <div class="num">{{ searchWeather.temp }}<sup>o</sup>C</div>
                            <div class="forecast-icon">
                                <img :src="searchWeather.icon">
                            </div>
                        </div>
                        <span><img src="../assets/images/icon-umberella.png" alt="">{{ searchWeather.humid }}%</span>
                        <span><img src="../assets/images/icon-wind.png" alt="">{{ searchWeather.wind }}km/h</span>
                        <span><img src="../assets/images/icon-compass.png" alt="">{{ searchWeather.windir }}</span>
                    </div>
                </div>
                <div class="forecast">
                    <div class="forecast-header">
                        <div class="day">Tommorow</div>
                    </div> <!-- .forecast-header -->
                    <div class="forecast-content">
                        <div class="forecast-icon">
                            <img :src="searchWeather.iconnext" alt="" width=48>
                        </div>
                        <div class="degree">{{ searchWeather.tempnext }}<sup>o</sup>C</div>
                    </div>
                </div>
                <div class="forecast">
                    <div class="forecast-header">
                        <div class="day">Next 2 Days</div>
                    </div> <!-- .forecast-header -->
                    <div class="forecast-content">
                        <div class="forecast-icon">
                            <img :src="searchWeather.icon2next" alt="" width=48>
                        </div>
                        <div class="degree">{{ searchWeather.temp2next }}<sup>o</sup>C</div>
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
        ...mapState(customStore, ["popular", "searchWeather"])
    },
    methods: {
        ...mapActions(customStore, ["fetchPopularLocations", "fetchSearchLocation"]),

        //Submit find
        async submitFind() {
            this.fetchSearchLocation(this.location)
        }

    },
    created() {
        this.fetchPopularLocations()
    }
}
</script>
