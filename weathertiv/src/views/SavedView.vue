<template>
    <main class="main-content">
        <div class="container">
            <div class="breadcrumb">
                <h2 style="margin:auto">Saved Location</h2>
            </div>
        </div>

        <div class="fullwidth-block">
            <div class="container">
                <div class="row">
                    <div>
                        <SavedCard />
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
        <br>
        <br>
        <br>
        <br>
        <br>
    </main> <!-- .main-content -->
</template>

<script>
import SavedCard from '../components/SavedCard.vue'
import { mapState, mapActions } from "pinia";
import { customStore } from '../stores/store';

export default {
    components: {
        SavedCard,
    },
    data() {
        return {
        }
    },
    computed: {
        ...mapState(customStore, ["popular", "ipWeather", "searchWeather"])
    },
    methods: {
        ...mapActions(customStore, ["fetchPopularLocations", "fetchIpLocation", "fetchSearchLocation"]),

    },
    created() {
        this.fetchPopularLocations()
    }
}
</script>