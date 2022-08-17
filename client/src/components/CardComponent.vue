<template>
    <div class="card overflow-hidden" style="width:250px; height: 300px;">
        <div class=" w-100 overflow-hidden" style="height: 200px;">
            <img :src="location.gambar_url" class="img-card" alt="">
        </div>
        <div class="content p-2">
            <h5>{{location.nama}}</h5>
            <button class="btn btn-sm  py-0 rounded-1" @click="handleVisit(location.id)"><i class="fa-brands fa-invision"></i> Visit</button>
            <router-link :to="{name: 'detail', params: {id: location.id}}" class="btn btn-sm py-0 rounded-1 ms-1" @click="handleDetail(location.id)"><i class="fa-solid fa-circle-info"></i> detail</router-link>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores';
export default {
    props: ['location'],
    methods: {
        ...mapActions(useCounterStore, ['addFavorite', 'fetchDataById']),
        handleVisit(value){
            this.addFavorite(value)
        },
        handleDetail(value){
            this.fetchDataById(value)
        }
    }
}
</script>

<style>
.img-card {
    width:120%;
}
</style>