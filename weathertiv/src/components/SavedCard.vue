<template>
    <!-- single card -->
    <div class="photo">
        <div class="photo-preview photo-detail"></div>
        <div class="photo-details">
            <h1 class="photo-title">{{ locationProp.name }}</h1>
            <button class="btn btn-secondary btn-lg rounded-pill" @click="clickSee(locationProp.id)">
                See weather forecasting
            </button>
            <br>
            <br>
            <button class="btn btn-danger btn-lg rounded-pill" @click="clickRemove(locationProp.id)">
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
        ...mapActions(customStore, ["deleteSavedLocation"]),

        // Click Remove
        async clickRemove(savedId) {
            this.deleteSavedLocation(savedId)
        },

        // Click see
        async clickSee(savedId) {
            this.$router.push({ name: "savedDetail", params: { savedId: savedId } });
        }
    },
}
</script>