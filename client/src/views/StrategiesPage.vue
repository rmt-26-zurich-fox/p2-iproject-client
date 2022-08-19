<script>
import { mapActions, mapWritableState, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  props: ["mapName"],
  methods: {
    ...mapActions(useCounterStore, ["getMap"]),
    gettingMap(map) {
      this.getMap(map);
    },
  },
  computed: {
    ...mapWritableState(useCounterStore, ["map"]),
    ...mapWritableState(useCounterStore, ["type"]),
    ...mapWritableState(useCounterStore, ["site"]),
  },
  created() {
    this.map = "";
    this.type = "";
    this.site = "";
  },
};
</script>
<template>
  <div class="col-12">
    <a href="" @click.prevent="gettingMap(mapName)">
      <div class="bg-danger text-white position-relative m-3 rounded">
        <div class="overlays"></div>
        <img
          class="maps"
          src="../assets/Ascent.jpg"
          alt=""
          v-if="mapName === 'Ascent'"
        />
        <img
          class="maps"
          src="../assets/Bind.jpg"
          alt=""
          v-if="mapName === 'Bind'"
        />
        <img
          class="maps"
          src="../assets/Breeze.jpg"
          alt=""
          v-if="mapName === 'Breeze'"
        />
        <img
          class="maps"
          src="../assets/Fracture.jpeg"
          alt=""
          v-if="mapName === 'Fracture'"
        />
        <img
          class="maps"
          src="../assets/Haven.jpg"
          alt=""
          v-if="mapName === 'Haven'"
        />
        <img
          class="maps"
          src="../assets/Icebox.jpg"
          alt=""
          v-if="mapName === 'Icebox'"
        />
        <img
          class="maps"
          src="../assets/Pearl.jpg"
          alt=""
          v-if="mapName === 'Pearl'"
        />

        <div class="card-img-overlay">
          <h1 class="title position-absolute bottom-0 start-0 m-3">
            {{ mapName }}
          </h1>
        </div>
      </div>
    </a>
  </div>
</template>

<style>
body {
  background-color: #1b2430;
  height: 100vh;
}

.title {
  font-size: 80px;
}
.maps {
  width: 100%;
  height: 100%;
  max-height: 300px;
  object-fit: cover;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.overlays {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: black;
  opacity: 0;
  z-index: 1;
  transition: all 0.5s;
}
.overlays:hover {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.333);
}
</style>
