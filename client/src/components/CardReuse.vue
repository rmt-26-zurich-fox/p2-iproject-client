<template>
    <!--Card 1-->
    <div class="rounded overflow-hidden shadow-lg bg-white">
        <img class="aspect-square h-80 w-full" :src="weathericon">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ weatherDescription }}</div>
            <h3>{{ bookmark.city }}</h3>
            <label for="">Temperature:</label>
            <h1 class="text-xl">{{ bookmark.current.weather.tp }}°C</h1>
            <h2>{{ convertDate }}</h2>
        </div>
        <div class="px-6 pt-4 pb-2">
            <div class="mb-2">
                <ButtonUsage nameButton="See Detail" @click="handleDetail" />
            </div>
            <ButtonUsage nameButton="Delete" @click="delbookmark(bookmark.bookmarkId)" />
        </div>
    </div>
</template>
<script>
import { mapActions } from 'pinia';
import ButtonUsage from '../components/ButtomUsage.vue'
import { useCounterStore } from '../stores/counter';
export default {
    components: { ButtonUsage },
    props: ['bookmark'],
    computed: {
        convertDate() {
            let date = new Date().toJSON(this.bookmark.current.weather.ts).slice(0, 10).replace(/-/g, "/");
            return date;
        },
        weathericon() {
            if (this.bookmark.current.weather.ic === "01d") {
                return "https://www.airvisual.com/images/01d.png";
            }
            else if (this.bookmark.current.weather.ic === "01n") {
                return "https://www.airvisual.com/images/01n.png";
            }
            else if (this.bookmark.current.weather.ic === "02d") {
                return "https://www.airvisual.com/images/02d.png";
            }
            else if (this.bookmark.current.weather.ic === "02n") {
                return "https://www.airvisual.com/images/02n.png";
            }
            else if (this.bookmark.current.weather.ic === "03d") {
                return "https://www.airvisual.com/images/03d.png";
            }
            else if (this.bookmark.current.weather.ic === "04d") {
                return "https://www.airvisual.com/images/04d.png";
            }
            else if (this.bookmark.current.weather.ic === "09d") {
                return "https://www.airvisual.com/images/09d.png";
            }
            else if (this.bookmark.current.weather.ic === "10d") {
                return "https://www.airvisual.com/images/10d.png";
            }
            else if (this.bookmark.current.weather.ic === "10n") {
                return "https://www.airvisual.com/images/10n.png";
            }
            else if (this.bookmark.current.weather.ic === "11d") {
                return "https://www.airvisual.com/images/11d.png";
            }
            else if (this.bookmark.current.weather.ic === "13d") {
                return "https://www.airvisual.com/images/13d.png";
            }
            else {
                return "https://www.airvisual.com/images/50d.png";
            }
        },
        weatherDescription() {
            if (this.bookmark.current.weather.ic === "01d") {
                return "clear sky (day)";
            }
            else if (this.bookmark.current.weather.ic === "01n") {
                return "clear sky (night)";
            }
            else if (this.bookmark.current.weather.ic === "02d") {
                return "few clouds (day)";
            }
            else if (this.bookmark.current.weather.ic === "02n") {
                return "few clouds (night)";
            }
            else if (this.bookmark.current.weather.ic === "03d") {
                return "scattered clouds";
            }
            else if (this.bookmark.current.weather.ic === "04d") {
                return "broken clouds";
            }
            else if (this.bookmark.current.weather.ic === "09d") {
                return "shower rain";
            }
            else if (this.bookmark.current.weather.ic === "10d") {
                return "rain (day time)";
            }
            else if (this.bookmark.current.weather.ic === "10n") {
                return "rain (night time)";
            }
            else if (this.bookmark.current.weather.ic === "11d") {
                return "thunderstorm";
            }
            else if (this.bookmark.current.weather.ic === "13d") {
                return "snow";
            }
            else {
                return "mist";
            }
        },
        AqiStatus() {
            if (this.bookmark.current.pollution.aqius <= 50) {
                return "Good";
            }
            else if (this.bookmark.current.pollution.aqius <= 100) {
                return "Moderate";
            }
            else if (this.bookmark.current.pollution.aqius <= 150) {
                return "Unhealthy for sensitive groups";
            }
            else if (this.bookmark.current.pollution.aqius <= 200) {
                return "Unhealthy";
            }
            else if (this.bookmark.current.pollution.aqius <= 300) {
                return "Very Unhealthy";
            }
            else {
                return "Hazardous";
            }
        },
    },
    methods: {
        ...mapActions(useCounterStore, ['deleteBookmark', 'fetchWeather']),
        handleDetail() {
            let obj = {
                city: this.bookmark.city,
                state: this.bookmark.state,
                country: this.bookmark.country,
                key: "adff6230-bca9-4190-972a-219e13fb5087"
            }
            this.fetchWeather(obj)
        },
        delbookmark(id) {
            this.deleteBookmark(id)
        }
    },
}
</script>