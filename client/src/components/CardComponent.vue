<template>
    <div class="card overflow-hidden" style="width:250px; height: 300px;">
        <div class=" w-100 overflow-hidden" style="height: 200px;">
            <img :src="location.gambar_url" class="img-card" alt="">
        </div>
        <div class="content p-2">
            <h5>{{location.nama}}</h5>
            <button class="btn btn-sm btn-primary py-0 rounded-1" @click="handleVisit(location.id)">Visit</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores';
export default {
    props: ['location'],
    methods: {
        ...mapActions(useCounterStore, ['addFavorite']),
        handleVisit(value){
            this.addFavorite(value)
        }
    }
}
</script>

<style>
.img-card {
    width:120%;
}
</style>