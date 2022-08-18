<script>
import { useCounterStore } from "../stores/counter"
import { mapActions } from "pinia"

export default {
    methods: {
        ...mapActions(useCounterStore, ["fetchDataReview"]),
        async backToHome() {
            await this.fetchDataReview();
            this.$router.push("/");
        }
    }
}
</script>

<template>
    <div>
        <h1 class="text-center font-bold text-dark-200 text-4xl">ERROR 404</h1>
        <h2 class="text-center font-bold text-dark-200 text-4xl">PAGE NOT FOUND</h2>
        <hr>
        <h5 class="text-center font-bold text-dark-200 text-2xl mt-20">Back To HomePage</h5>
    </div>
    <div class="text-center mt-5">
        <button class="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700 mx-2" @click.prevent="backToHome">Home</button>
    </div>
</template>