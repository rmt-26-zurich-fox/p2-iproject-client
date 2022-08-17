<script>
  import { mapActions, mapState } from "pinia";
  import { useCounterStore } from "../stores/counter";
  import CardPost from "../components/CardPost.vue";

  export default {
    components: {
      CardPost,
    },
    methods: {
      ...mapActions(useCounterStore, ["readAllPost"]),
    },
    created() {
      this.readAllPost();
    },
    computed: {
      ...mapState(useCounterStore, ["allPost"]),
    },
  };
</script>

<template>
  <div class="container">
    <CardPost v-for="post in allPost" :key="post.id" :post="post" />
  </div>
</template>

<style scoped>
  .container {
    margin-top: 50px;
  }
</style>
