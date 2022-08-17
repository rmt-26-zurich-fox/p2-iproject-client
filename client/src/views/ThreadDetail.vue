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
    ...mapState(useMain, ["oneThread"]),
    dateFormatter() {
      let date = new Date(this.oneThread.createdAt);
      return date.toDateString();
    },
  },
};
</script>
<template>
  <div class="container py-20 h-100" id="detail">
    <div class="row d-flex align-items-center justify-content-center h-100">
      <div class="container">
        <div class="card-body p-2 p-sm-4 shadow rounded-3 login-card">
          <div class="separator-thread">
            <h3>Thread</h3>
          </div>
          <div class="container-thread-detail px-3 py-3 rounded-3">
            <div class="d-flex flex-start align-items-center rounded-3">
              <div>
                <h6 class="fw-bold text-primary mb-1">
                  {{ oneThread.Profile.firstName }}
                  {{ oneThread.Profile.lastName }}
                </h6>
                <p class="text-muted small mb-0">
                  Shared publicly - {{ dateFormatter }}
                </p>
              </div>
            </div>

            <p class="mt-3 mb-2 pb-2">
              {{ oneThread.description }}
            </p>

            <div class="small d-flex justify-content-start mb-3">
              <a href="#!" class="d-flex align-items-center me-3">
                <p class="mb-0">Like</p>
              </a>
            </div>
          </div>
          <!-- COMMENTS -->
          <div class="separator-thread">
            <h3>Comments</h3>
          </div>
          <div
            class="comment-section container-thread-detail px-3 py-3 rounded-3"
          >
            <div class="d-flex flex-start align-items-center rounded-3">
              <div>
                <h6 class="fw-bold text-primary mb-1">Lily Coleman</h6>
                <p class="text-muted small mb-0">Shared publicly - Jan 2020</p>
              </div>
            </div>
            <p class="mt-3 mb-2 pb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip consequat.
            </p>

            <div class="small d-flex justify-content-start mb-3">
              <a href="#!" class="d-flex align-items-center me-3">
                <p class="mb-0">Like</p>
              </a>
            </div>
          </div>

          <!-- FORM ADD COMMENT -->
          <div
            class="add-comment-section container-thread-detail px-3 py-3 rounded-3"
            style="background-color: #f8f9fa"
          >
            <div class="d-flex flex-start w-100">
              <div class="form-outline w-100 p-1">
                <label class="form-label" for="textAreaExample"
                  >Add Comment</label
                >
                <textarea
                  class="form-control"
                  id="textAreaExample"
                  rows="3"
                  style="background: #fff"
                ></textarea>
              </div>
            </div>
            <div class="pt-2">
              <button type="button" class="btn btn-primary btn-sm">
                Post comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <RouterView />
</template>
