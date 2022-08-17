<template>
  <div class="row row-cols-1 row-cols-md-3 mt-5">
    <CardLayout />
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useHouseStore } from "../stores/house";
import CardLayout from "./CardLayout.vue";

export default {
  components: { CardLayout },

  methods: {
    ...mapActions(useHouseStore, ["getAllHouses"]),
  },
  created() {
    this.getAllHouses();
  },
};
</script>
