<script>
import { mapState, mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";
import StrategiesPage from "./StrategiesPage.vue";

export default {
  methods: {
    ...mapActions(useCounterStore, ["fetchMap"]),
  },
  computed: {
    ...mapState(useCounterStore, ["mapsData"]),
  },
  created() {
    this.fetchMap();
  },
  components: { StrategiesPage },
};
</script>
<template>
  <div v-if="mapsData" style="margin-top: 100px">
    <div class="container">
      <div class="row">
        <div v-for="map in mapsData" :key="map.id">
          <div v-if="map.name === 'Ascent'">
            <StrategiesPage mapName="Ascent" />
          </div>
          <div v-if="map.name === 'Bind'">
            <StrategiesPage mapName="Bind" />
          </div>
          <div v-if="map.name === 'Breeze'">
            <StrategiesPage mapName="Breeze" />
          </div>
          <div v-if="map.name === 'Fracture'">
            <StrategiesPage mapName="Fracture" />
          </div>
          <div v-if="map.name === 'Haven'">
            <StrategiesPage mapName="Haven" />
          </div>
          <div v-if="map.name === 'Icebox'">
            <StrategiesPage mapName="Icebox" />
          </div>
          <div v-if="map.name === 'Pearl'">
            <StrategiesPage mapName="Pearl" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
