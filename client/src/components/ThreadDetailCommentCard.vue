<script>
import TableRow from "../components/TableRow.vue";
import { mapState, mapActions } from "pinia";
import { useMain } from "../stores/main";

export default {
  props: ["oneComment"],
  computed: {
    dateFormatter() {
      let date = new Date(this.oneComment.createdAt);
      return date.toDateString();
    },
  },
};
</script>
<template>
  <div class="comment-section container-thread-detail px-3 py-3 rounded-3">
    <div class="d-flex flex-start align-items-center rounded-3">
      <div>
        <h6 class="fw-bold text-primary mb-1">
          {{ oneComment.Profile.firstName }} {{ oneComment.Profile.lastName }}
        </h6>
        <p class="text-muted small mb-0">
          Shared publicly - {{ dateFormatter }}
        </p>
      </div>
    </div>
    <p class="mt-3 mb-2 pb-2">
      {{ oneComment.comment }}
    </p>

    <div class="small d-flex justify-content-start mb-3">
      <a href="#!" class="d-flex align-items-center me-3">
        <p class="mb-0">Like</p>
      </a>
    </div>
  </div>
</template>
