<script>
import FindWeather from '../components/FindWeather.vue';
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';
export default {
  components: { FindWeather },
  methods: {
    ...mapActions(useCounterStore, ['fetchState'])
  },
  created() {
    this.fetchState()
  }
}
</script>

<template>
  <FindWeather />
</template>
