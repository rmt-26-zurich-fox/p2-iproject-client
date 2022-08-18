<template>
  <SideBar />
  <div class="wrap-all-the-things">
    <div id="main-page">
      <div class="page-heading position-relative">
        <div class="page-title">
          <div class="row">
            <div
              style="padding-left: 140px"
              class="col-12 col-md-6 order-md-1 order-last"
            >
              <figure class="fir-image-figure">
                <a class="fir-imageover" rel="noopener" target="_blank">
                  <div class="fir-author-image fir-clickcircle"></div>
                  <div class="fir-imageover-color" style=""></div>
                  <img
                    class="fir-imageover-image fir-clickcircle"
                    src="https://img.icons8.com/doodle/96/000000/user.png"
                  />
                </a>

                <figcaption>
                  <div class="fig-author-figure-title">{{ email }}</div>
                  <div class="fig-author-figure-title">
                    {{ role }}
                  </div>
                </figcaption>
              </figure>
              <button type="button" class="btn btn-danger" @click="toLogout">
                Logout
              </button>
              <p class="text-subtitle text-muted"></p>
            </div>
          </div>
        </div>

        <div>
          <div
            class="active col align-self-end position-absolute top-0 end-0"
            id="add-food-button"
            v-if="role === 'Admin'"
          >
            <router-link class="btn btn-primary" to="/cloth">
              <span>Add Laundry</span>
            </router-link>
          </div>

          <TableData style="margin-left: 313px" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import SideBar from "../components/SideBar.vue";
import TableData from "../components/TableData.vue";
import { useCounterStore } from "../stores/counter";

export default {
  components: {
    SideBar,
    TableData,
  },
  data() {
    return {
      email: localStorage.getItem("email"),
      role: localStorage.getItem("role"),
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["fetchDataCloth"]),
    toLogout() {
      localStorage.clear();
      this.$router.push("login");
    },
    changeStatus(status) {
      this.$emit("changeStatus", status);
    },
  },
  created() {
    this.fetchDataCloth();
  },
};
</script>
