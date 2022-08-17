<template>

  <!-- my trip page -->

  <div class="container-fluid p-0 d-flex" style="height:100vh;">
    <div class="col-4 p-2" style="background-color: #183fa8; height: 100%; color: white;">
      <h3 class="text-yellow">List Destination</h3>
      <ul v-for="trip in myTrip" :key="trip.id">
        <li><i class="fa-solid fa-location-dot text-yellow"></i> {{ trip.name }}</li>
      </ul>
      <h3 class="text-yellow">Result Optimize Itenary</h3>
    </div>
    <div class="col-8">
      <div style="width: 700px; height: 500px; margin-top:100px; margin-left:100px;" id="mapContainer"
        class="shadow-sm"></div>
<!-- 
        <div class="text-center mt-3">
        <button class="btn btn-primary rounded-0 me-1" @click.prevent="handelZoom('+')" >+</button>
        <button class="btn btn-primary rounded-0" @click.prevent="handelZoom('-')">-</button>
        </div> -->
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
    handelZoom(value){
      console.log(value)
      if(value === '-'){
        this.zoom--
        console.log(this.zoom)
      }else{
        this.zoom++
        console.log(this.zoom)
      }
    }
  },
  created() {
    this.getMytrip();
  },
  data() {
    return {
      lat: -6.655621,
      lng: 107.598241,
      zoom: 10
    }
  },
  mounted() {
    let platform = new H.service.Platform({
      'apikey': 'nyM0SzYainiXsUJsL85SvQxY1J6NDbQRmlMRPIedxPw'
    });

    let defaultLayers = platform.createDefaultLayers();
    let arrLatLng = []
    let points = []
    for (let i = 0; i < this.myTrip.length; i++) {
      arrLatLng.push([+this.myTrip[i].latitude, +this.myTrip[i].longitude])
      points.push({lat: +this.myTrip[i].latitude, lng: +this.myTrip[i].longitude})
    }
    let map = new H.Map(
      document.getElementById('mapContainer'),
      defaultLayers.vector.normal.map,
      {
        zoom: this.zoom,
        center: { lat: -6.655621, lng: 107.598241 }
      });
    let icon = new H.map.Icon('icon1.png');


    arrLatLng.map(el => {
      return map.addObject(new H.map.Marker({ lat: el[0], lng: el[1] }, { icon: icon }))
    })

    let linestring = new H.geo.LineString();

    points.forEach(function (point) {
      linestring.pushPoint(point);
    });

    let polyline = new H.map.Polyline(linestring, { style: { lineWidth: 10 }});
    map.addObject(polyline);
  }
}
</script>

<style>
ul li {
  list-style: none;
}
</style>