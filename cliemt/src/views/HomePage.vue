<script>
  import CardPost from "../components/CardPost.vue";
  export default {
    components: {
      CardPost,
    },
  };
</script>

<template>
  <div class="container">
    <CardPost />
    <CardPost />
  </div>
</template>

<style scoped>
  .container {
    margin-top: 50px;
  }
</style>
