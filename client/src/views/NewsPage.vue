<script>
import { mapState, mapActions } from "pinia";
import { useMain } from "../stores/main";
import NewsListCard from "../components/NewsListCard.vue";

export default {
  name: "CreateThread",
  components: {
    NewsListCard,
  },
  methods: {
    ...mapActions(useMain, ["getAllThreads"]),
  },
  computed: {
    ...mapState(useMain, ["news", "oneTeam"]),
  },
  data() {
    return {};
  },
  created() {
    this.getAllThreads();
  },
};
</script>
<template>
  <section class="vh-200" id="register_page">
    <div class="container py-5 h-100">
      <div class="row d-flex align-items-center justify-content-center h-100">
        <div class="col-sm-12 col-md-12 col-lg-12 mx-auto">
          <!-- <div class="card border-0 shadow rounded-3 my-5 login-card"> -->
          <h1>{{ oneTeam.full_name }} Related News</h1>
          <div class="card-body p-4 p-sm-5 shadow create-thread-card rounded-3">
            <NewsListCard
              v-for="el in news"
              :key="'news' + el.id"
              :oneNews="el"
            />
          </div>
        </div>
        <!-- </div> -->
      </div>
    </div>
  </section>

  <RouterView />
</template>
