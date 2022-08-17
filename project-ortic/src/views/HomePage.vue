<script>
import ItemCard from '../components/ItemCard.vue'
import { mapActions } from 'pinia'
import { mapWritableState } from 'pinia'
import { useCustomStore } from '../stores/custom'

export default {
    components: {
        ItemCard
    },
    methods: {
        ...mapActions(useCustomStore, ['fetchItems'])
    },
    computed: {
        ...mapWritableState(useCustomStore, ['items'])
    },
    created() {
        this.fetchItems()
    }
}

</script>

<template>
<div
    class="p-5 text-center bg-image"
    style="
      background-image: url('https://1.bp.blogspot.com/-vsWssKW1n-E/X8yRcNvJXAI/AAAAAAAAJJU/plTJEoGfpNMa8DdgMEl8SBpG45AopQ9KwCLcBGAsYHQ/s1500/ekskavator%2Bdokter%2Bgigi.jpg');
      height: 400px;
    "
  >
    <div class="mask" style="background-color: rgba(0, 0, 0, 0.6);">
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="text-white">
          <h1 class="mb-3">ORTIC</h1>
          <h4 class="mb-3">Dentist equipment store</h4>
        </div>
      </div>
    </div>
  </div>

  <!-- item-list -->
  <div class="py-5">
    <div class="container">
      <div class="row">
        
    <ItemCard v-for="item in items" :key="item.id" :item="item"/>
     </div>  
    </div>
  </div>

</template>

<style>
body {
    background-color:lightsalmon;
}

</style>