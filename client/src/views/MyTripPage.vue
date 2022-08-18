<template>

  <!-- my trip page -->

  <div class="container-fluid p-0 d-flex" style="height:100vh;">
    <div class="col-4 p-2" style="background-color: #183fa8; height: 100%; color: white;">
      <h3 class="text-yellow">List Destination</h3>
      <ul v-for="trip in myTrip" :key="trip.id" class="d-flex flex-wrap">
        <span class="badge bg-danger me-3" style="cursor:pointer;" @click="handleCancel(trip.id)">cancel</span>
        <li><i class="fa-solid fa-location-dot text-yellow"></i> {{ trip.name }}</li>
      </ul>
      <h3 class="text-yellow">Result Optimize Itenary</h3>
    </div>
    <div class="col-8">
      <div style="width: 700px; height: 500px; margin-top:100px; margin-left:100px;" id="mapContainer"
        class="shadow-sm"></div>
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
    ...mapActions(useCounterStore, ["getMytrip", 'cancelTrip']),
    handleCancel(value) {
      this.cancelTrip(value),
      this.getMytrip();
    }
  },
  created() {
    this.getMytrip();
  },
  data() {
    return {
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
      points.push({ lat: +this.myTrip[i].latitude, lng: +this.myTrip[i].longitude })
    }
    let map = new H.Map(
      document.getElementById('mapContainer'),
      defaultLayers.vector.normal.map,
      {
        zoom: this.zoom,
        center: { lat: -6.655621, lng: 107.598241 }
      });
    let icon = new H.map.Icon('icon1.png');
    let icon2 = new H.map.Icon('icon2.png');
    let icon3 = new H.map.Icon('icon3.png');


    arrLatLng.map((el, i) => {
      let element;
      if (i === 0) {
        element += map.addObject(new H.map.Marker({ lat: el[0], lng: el[1] }, { icon: icon2 }))
      } else if (i === arrLatLng.length - 1) {
        element += map.addObject(new H.map.Marker({ lat: el[0], lng: el[1] }, { icon: icon3 }))
      } else {
        element += map.addObject(new H.map.Marker({ lat: el[0], lng: el[1] }, { icon: icon }))
      }
      return element
    })

    console.log(arrLatLng, "before")

    function sortLngLat(a, b) {
      var x = a[0] / a[1];
      var y = b[0] / b[1];
    }
    var sortedArray = arrLatLng.sort(sortLngLat);
    console.log(sortedArray, "affter");

    let linestring = new H.geo.LineString();

    points.forEach(function (point) {
      linestring.pushPoint(point);
    });

    let polyline = new H.map.Polyline(linestring, { style: { lineWidth: 10 } });
    map.addObject(polyline);
  }
}
</script>

<style>
ul li {
  list-style: none;
}
</style>