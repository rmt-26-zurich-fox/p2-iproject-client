<template></template>

<script>
import axios from "axios";
import { mapState, mapActions } from "pinia";
import { useGlobalStore } from "../stores/globalStore";

export default {
  data() {
    return {
      currentlyWatch: [],
      unwatched: [],
      watched: [],
    };
  },
  computed: {
    ...mapState(useGlobalStore, ["baseUrl"]),
  },
  methods: {
    ...mapActions(useGlobalStore, ["errorHandler"]),
    async getBookmark() {
      try {
        const { access_token } = localStorage;
        const { data } = await axios.get(this.baseUrl + "/bookmark", {
          headers: {
            access_token,
          },
        });

        this.currentlyWatch = data["Currently watch"];
        this.unwatched = data.Unwatched;
        this.watched = data.Watched;
      } catch (error) {
        this.errorHandler(error);
      }
    },
  },
  created() {
    this.getBookmark();
  },
};
</script>
