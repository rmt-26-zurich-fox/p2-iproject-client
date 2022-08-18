<script>
import { mapState, mapActions } from "pinia";
import { RouterView } from "vue-router";
import TeamsCard from "../components/TeamsCard.vue";
import Swal from "sweetalert2";

import { useMain } from "../stores/main";
export default {
  components: {
    TeamsCard,
  },
  created() {
    this.getFavoriteTeams();
  },
  methods: {
    ...mapActions(useMain, ["getFavoriteTeams"]),
  },
  computed: {
    ...mapState(useMain, ["favTeams"]),
  },
};
</script>

<template>
  <section id="news_table" class="d-flex flex-column">
    <h1>Favorite Page</h1>
    <div class="table-container shadow login-card rounded-3 d-flex flex-column">
      <!-- <div class="table-container"> -->
      <!-- <div class="form-check-inline text-center my-2">
          </div> -->
      <div class="big-container">
        <div class="d-flex justify-content-center">
          <div class="content-container">
            <div class="row row-cols-1 row-cols-md-3 g-5">
              <!-- CARD -->
              <TeamsCard
                v-for="el in favTeams"
                :key="'favTeam' + el.id"
                :oneTeam="el"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
