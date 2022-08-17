<template>
    <main class="main-content">
        <div class="container">
            <div class="breadcrumb">
                <h2 style="margin:auto" v-if="saved[0]">Saved Location</h2>
                <h2 style="margin:auto" v-if="!saved[0]">Your Saved Location is Empty!</h2>
            </div>
        </div>

        <div class="fullwidth-block">
            <div class="container">
                <div class="row">
                    <div>
                        <SavedCard v-for="location in saved" :key="location.id" :locationProp="location" />
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
        ...mapState(customStore, ["saved"])
    },
    methods: {
        ...mapActions(customStore, ["fetchSavedLocation"]),

    },
    created() {
        this.fetchSavedLocation()
    }
}
</script>