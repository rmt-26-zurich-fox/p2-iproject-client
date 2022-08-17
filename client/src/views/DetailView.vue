<template>
    <div class="container mt-5 row">
        <div class="col-8">
            <div class="imgContent">
                <img :src="objDataById.gambar_url" alt="img" style="width:100%;">
            </div>
        </div>
        <div class="col-4">
            <h1 class="fw-bold text-blue">{{ objDataById.nama }}</h1>
            <hr>
            <ul>
                <li> Kategory : <span class="fw-semibold">{{ objDataById.kategori }}</span></li>
                <li> Deskripsi : <span class="fw-semibold">{{ objDataById.deskripsi }}</span></li>
                <li> Deskripsi : <span class="fw-semibold">{{ objDataById.photo_by }}</span></li>
            </ul>
            <div>
                <img :src="qrcode" alt="" style="width:200px">
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useCounterStore } from '../stores/index'
export default {
    computed: {
        ...mapState(useCounterStore, ['objDataById', 'qrcode'])
    },
    methods: {
        ...mapActions(useCounterStore, ['fetchDataById', 'qrCode'])
    },
    created() {
        this.fetchDataById(this.$route.params.id)
        this.qrCode(this.$route.params.id)
    }
}
</script>

<style scoped>
.imgContent {
    width: 100%;
    overflow: hidden;
}
</style>