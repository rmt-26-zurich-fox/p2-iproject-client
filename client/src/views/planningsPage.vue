<script>
import { mapActions, mapState } from 'pinia';
import animeCard from '../components/animeCard.vue';
import { useCounterStore } from '../stores/counter';


export default {
    components: {
        animeCard
    },
    methods: {
        ...mapActions(useCounterStore, ["fetchPlannings"])
       
    },
    computed: {
        ...mapState(useCounterStore, ["dataPlannings"])
    },
    created(){
        this.fetchPlannings()
    }
}
</script>

<template>
 <div class="-mt-40">
        <div class="container my-12 mx-auto px-4 md:px-12 rounded-xl">
            <h1 class="text-2xl font-bold text-black">Your List</h1>
            <div class="flex flex-wrap -mx-1 lg:-mx-4">
                <animeCard v-for="el in dataPlannings" :key="el.id" :el="el.Anime"></animeCard>
            </div>
        </div>
    </div>
</template>