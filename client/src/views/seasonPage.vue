<script>
import { mapActions, mapState } from 'pinia';
import animeCard from '../components/animeCard.vue';
import { useCounterStore } from '../stores/counter';
import loadingPage from './loadingPage.vue';

export default {
    components: {
        animeCard,
        loadingPage
    },
    methods: {
        ...mapActions(useCounterStore, ["fetchSeason"])
    },
    computed: {
        ...mapState(useCounterStore, ["dataAnimes", "season", "isLoading"])
    },
    created(){
        this.fetchSeason(this.$route.params)
    }
}
</script>

<template>
    <loadingPage v-if="isLoading === true"/>
    <div v-if="isLoading === false" class="-mt-40">
        <div class="container my-12 mx-auto px-4 md:px-12 rounded-xl">
            <h1 class="text-2xl font-bold text-black">{{season}}</h1>
            <div class="flex flex-wrap -mx-1 lg:-mx-4">
                <animeCard v-for="el in dataAnimes" :key="el.id" :el="el"/>
            </div>
        </div>
    </div>
</template>