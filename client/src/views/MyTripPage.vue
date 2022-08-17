<template>

  <!-- my trip page -->

  <div class="container-fluid p-0 d-flex" style="height:100vh;">
    <div class="col-4 p-2" style="background-color: #183fa8; height: 100%; color: white;">
      <h3 class="text-yellow">List Destination</h3>
       <ul v-for="trip in myTrip" :key="trip.id">
          <li><i class="fa-solid fa-location-dot"></i>  {{trip.name}}</li>     
      </ul>
      <h3 class="text-yellow">Result Optimize Itenary</h3>
    </div>
    <div class="col-8">
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useCounterStore } from '../stores/index'
export default {  
    computed: {
      ...mapState(useCounterStore, ['myTrip'])
    },
    methods: {
        ...mapActions(useCounterStore, ["getMytrip"]),
    },
    created() {
        this.getMytrip();
    }
}
</script>

<style>
  ul li {
    list-style: none;
  }
</style>