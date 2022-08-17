<template>

</template>

<script>
import { mapActions } from 'pinia';
import { useHouseStore } from '../stores/house';

export default {
  methods: {
    ...mapActions(useHouseStore, ['getAllHouses'])
  },

  created() {
    this.getAllHouses()
  }
}
</script>