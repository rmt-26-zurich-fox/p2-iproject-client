<script>
import { mapState, mapActions } from "pinia";
import { useMain } from "../stores/main";
import ThreadListCard from "../components/ThreadListCard.vue";

export default {
  name: "CreateThread",
  components: {
    ThreadListCard,
  },
  methods: {
    ...mapActions(useMain, ["getAllThreads"]),
  },
  computed: {
    ...mapState(useMain, ["threads"]),
  },
  data() {
    return {
      newThread: {
        title: "",
        description: "",
        explicit: "",
        category: "",
      },
    };
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
          <div class="card-body p-4 p-sm-5 shadow create-thread-card rounded-3">
            <ThreadListCard
              v-for="el in threads"
              :key="'threads' + el.id"
              :oneThread="el"
            />
          </div>
        </div>
        <!-- </div> -->
      </div>
    </div>
  </section>

  <RouterView />
</template>
