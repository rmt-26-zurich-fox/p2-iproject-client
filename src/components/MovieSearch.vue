<template>
  <div class="search">
    <input v-model="keyword" class="form-control" type="text" />
    <button @click="$emit('search', keyword)" class="rounded">Search</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: this.$route.query.search || "",
    };
  },
};
</script>
