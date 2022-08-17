<script>
import ItemCard from '../components/ItemCard.vue'
import NewsCard from '../components/NewsCard.vue'
import { mapActions } from 'pinia'
import { mapWritableState } from 'pinia'
import { useCustomStore } from '../stores/custom'
import TimeCard from '../components/TimeCard.vue'

export default {
    components: {
    ItemCard,
    NewsCard,
    TimeCard
},
    methods: {
        ...mapActions(useCustomStore, ['fetchItems' , 'fetchDataItemFilter', 'fetchNews', 'fetchTime']),
    },
    computed: {
        ...mapWritableState(useCustomStore, ['items' , 'news', 'times'])
    },
    created() {
        this.fetchNews()
        this.fetchTime()
        const searchQuery = this.$route.query.searchQuery
        if (!searchQuery) {
            this.fetchItems()
        }
        else {
            this.fetchDataItemFilter(searchQuery)
        }
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
    <TimeCard/>
    <div class="news-container">
        <NewsCard v-for="newItem in news" :key="newItem.title" :newItem="newItem" />
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

.card{
    margin-bottom: 15px;
}

.news-container {
  display: flex;
  justify-content: space-evenly;
  background-color: lightsalmon;
}

.time-container {
  display: flex;
  background-color: lightsalmon;
}

</style>