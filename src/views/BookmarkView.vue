<template>
  <MovieList :data="unwatched" title="Unwatched" />
  <MovieList :data="currentlyWatch" title="Currently watch" />
  <MovieList :data="watched" title="Watched" />
</template>

<script>
import MovieList from "../components/MovieList.vue";
import axios from "axios";
import { mapState, mapActions } from "pinia";
import { useGlobalStore } from "../stores/globalStore";

export default {
  components: { MovieList },
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
