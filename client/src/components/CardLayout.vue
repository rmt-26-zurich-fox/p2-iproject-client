<template>
  <div class="col">
    <div @click="toDetailHouse" class="card text-bg-light mb-3" style="border: 0cm; cursor: pointer">
      <img :src="image.imageUrl" style="object-fit: cover; height: 300px" class="card-img-top rounded-4" />
      <div class="card-body" style="background-color: white">
        <h5 class="card-title">{{ house.name }}</h5>
        <p class="card-text text-muted">{{ house.Category.name }}</p>
        <p class="card-text">{{ formatPrice }} / night</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia';
import { useHouseStore } from '../stores/house';

export default {
  props: ["house", "image"],

  methods: {
    ...mapActions(useHouseStore, ['getDetailHouse']),

    toDetailHouse() {
      this.$router.push({ name: "houseDetailPage", params: { houseId: `${this.house.id}` } });
    },
  },

  computed: {
    formatPrice() {
      return this.house.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" }).replace(",00", "");
    },
  },
};
</script>
