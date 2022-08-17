<script>
import { mapActions } from "pinia";
import { useOtoStore } from "../stores/oto";

export default {
  components: {},
  created() {},
  methods: {
    ...mapActions(useOtoStore, [""]),
  },
};
</script>

<template></template>
