<script>
import { mapActions, mapState } from "pinia";
import { useMain } from "../stores/main";

export default {
  methods: {
    ...mapActions(useMain, ["refreshPage"]),
  },
  created() {
    this.refreshPage();
  },
};
</script>
<template>
  <div class="container not-found-container">
    <div class="row">
      <div class="col-md-12">
        <div class="error-template text-center">
          <h1>Oops!</h1>
          <h2>404 Not Found</h2>
          <div class="error-details">
            Sorry, an error has occured, Requested page not found!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
