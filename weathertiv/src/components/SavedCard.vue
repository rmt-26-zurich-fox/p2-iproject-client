<template>
    <!-- single card -->
    <div class="photo">
        <div class="photo-preview photo-detail"></div>
        <div class="photo-details">
            <h1 class="photo-title">Jakarta</h1>
            <button class="btn btn-secondary btn-lg rounded-pill">
                See weather forecasting
            </button>
            <br>
            <br>
            <button class="btn btn-danger btn-lg rounded-pill">
                Remove from my saved location
            </button>
        </div>
    </div>
</template>

<script>
import { mapActions } from "pinia";
import { customStore } from '../stores/store';

export default {
    props: ['locationProp'],
    methods: {
        ...mapActions(customStore, ["fetchPopularLocationWeather"]),
    },
}
</script>