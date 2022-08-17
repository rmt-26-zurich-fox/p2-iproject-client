<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-3 mt-5">
      <CardLayout v-for="house in houses" :key="house.id" :house="house" :image="house.Images[0]" />
    </div>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useHouseStore } from "../stores/house";
import CardLayout from "../components/CardLayout.vue";

export default {
  components: {
    CardLayout,
  },
  data() {
    return {
      houses: "",
    };
  },
  methods: {
    ...mapActions(useHouseStore, ["getAllHouses"]),

    async fetchHouses() {
      try {
        const data = await this.getAllHouses();
        this.houses = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.fetchHouses();
  },
};
</script>
