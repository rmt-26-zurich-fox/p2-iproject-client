<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';
import loadingPage from './loadingPage.vue';

export default {
    components: {
        loadingPage
    },
    methods: {
        ...mapActions(useCounterStore, ["fetchArts"])
    },
    computed: {
        ...mapState(useCounterStore, ["dataArts", "isLoading"])
    },
    created(){
        this.fetchArts()
    }
}
</script>

<template>
<loadingPage v-if="isLoading === true"/>
<div v-if="isLoading === false" class="-mt-40">
        <div class="container my-12 mx-auto px-4 md:px-12 rounded-xl">
            <h1 class="text-2xl font-bold text-black">Arts</h1>
            <div class="flex flex-wrap -mx-1 lg:-mx-4">
                <img class="m-4" v-for="el in dataArts" :key="el.id" :src="el.imageUrl" width="200">
            </div>
        </div>
    </div>
</template>