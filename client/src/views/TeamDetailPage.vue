<script>
import TableRow from "../components/TableRow.vue";
import { mapState, mapActions } from "pinia";
import { useMain } from "../stores/main";
export default {
  components: {
    TableRow,
  },
  async created() {},
  methods: {
    ...mapActions(useMain, ["fetchOneTeam", "likeATeam"]),
    goBack() {
      //   this.refreshOneNews();
      this.$router.push({ name: "HomePage" });
    },
    addToFavHandler(id) {
      this.likeATeam(id);
    },
  },
  computed: {
    ...mapState(useMain, ["oneTeam", "players"]),
  },
};
</script>
<template>
  <div class="container py-20 h-100" id="detail">
    <div class="row d-flex align-items-center justify-content-center h-100">
      <div class="container">
        <div class="card-body p-4 p-sm-5 shadow rounded-3 login-card">
          <div class="row gx-5">
            <div class="col-md-6 mb-4">
              <button
                type="button"
                class="go-back-button"
                id="go-back-button"
                @click="goBack"
              >
                Go Back
              </button>
              <div
                class="text-center image-container-detail"
                data-mdb-ripple-color="light"
              >
                <img
                  :src="oneTeam.TeamImage.imageUrl"
                  class="img-fluid rounded-3 mx-auto d-block"
                  id="detail-image"
                />
              </div>
            </div>

            <div class="col-md-6" id="">
              <div class="content-column-2">
                <span
                  class="abbre px-2 py-1 shadow-1-strong mb-3 detail-category"
                  >{{ oneTeam.abbreviation }}</span
                >
                <h4 id="detail-title">
                  <strong>{{ oneTeam.full_name }}</strong>
                </h4>
                <p class="detail-content">
                  Coached by: <b>{{ oneTeam.head_coach }}</b>
                </p>
                <p class="detail-content">
                  location : <b>{{ oneTeam.location }}</b>
                </p>
                <p class="detail-content">
                  Arena : <b>{{ oneTeam.arena }}</b>
                </p>
                <p class="detail-content">
                  Division : <b>{{ oneTeam.division }}</b>
                </p>
                <p class="detail-content">
                  Division Titles : <b>{{ oneTeam.division_titles }}</b>
                </p>
                <p class="detail-content">
                  Conference : <b>{{ oneTeam.conference }}</b>
                </p>
                <p class="detail-content">
                  Conference Titles : <b>{{ oneTeam.conference_titles }}</b>
                </p>
                <p class="detail-content">
                  Main Sponsor : <b>{{ oneTeam.main_sponsor }}</b>
                </p>
                <p class="detail-content">
                  Team Colors : <b>{{ oneTeam.team_colors }}</b>
                </p>
                <p class="detail-content">
                  Retired Numbers : <b>{{ oneTeam.retired_numbers }}</b>
                </p>
                <p class="detail-content">
                  General Manager : <b>{{ oneTeam.general_manager }}</b>
                </p>
                <p class="detail-content">
                  President : <b>{{ oneTeam.president }}</b>
                </p>
                <p class="detail-content">
                  Owner : <b>{{ oneTeam.ownership }}</b>
                </p>
                <p class="detail-content">
                  Championship(s) : <b>{{ oneTeam.championships }}</b>
                </p>
              </div>
            </div>
          </div>
          <div class="text-center">
            <h1 class="table-title">Players List</h1>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Position</th>
                  <th scope="col">Height (feet)</th>
                  <th scope="col">Weight (pounds)</th>
                </tr>
              </thead>
              <tbody class="table-data">
                <TableRow
                  v-for="el in players"
                  :key="'player' + el.id"
                  :player="el"
                />
              </tbody>
            </table>
            <button
              type="button"
              class="card-detail-button"
              id="goBack"
              @click="addToFavHandler(oneTeam.id)"
            >
              Add this team to your favorite list!
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <RouterView />
</template>
