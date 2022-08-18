<script>
import { mapState, mapActions } from "pinia";
import { useMain } from "../stores/main";
export default {
  props: ["oneNews"],
  methods: {},
  computed: {
    ...mapState(useMain, ["oneTeam"]),
  },
};
</script>

<template>
  <div class="card thread-list-card">
    <div class="card-header">Author: {{ oneNews.author }}</div>
    <div class="card-body">
      <div class="card-thread-container">
        <div class="card-content-thread">
          <h5 class="card-title">{{ oneNews.title }}</h5>
          <p class="card-text">
            {{ oneNews.description }}
          </p>
        </div>
        <div class="text-center button-to-thread-detail-container my-auto">
          <a :href="oneNews.url" class="btn btn-primary button-to-thread-detail"
            >Go to news website</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
