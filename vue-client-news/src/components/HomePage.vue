<template>
  <main>
    <div class="container my-3">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-5">
          <section class="newsfeed my-5">
            <div class="post" v-for="news in dataNews" v-bind:key="news.id">
              <div class="card">
                <div class="card-body">
                  <div class="container">
                    <!-- Title -->
                    <div class="row">
                      <div class="col-md-8">
                        <div class="mt-2">
                          <p>
                            <strong class="text dark"
                              >{{ news.title }}123</strong
                            >
                          </p>
                        </div>
                      </div>
                    </div>
                    <!-- News -->
                    <div
                      class="bg-image hover-overlay ripple shadow-1-strong rounded"
                      data-ripple-color="light"
                    >
                      <img
                        v-bind:src="news.imageUrl"
                        class="w-100"
                        height="300"
                      />
                      <a href="#!">
                        <div class="mask" style="background-color: gray"></div>
                      </a>
                    </div>
                    <!-- description -->
                    <div class="card-body">
                      <div class="container d-flex flex-column">
                        <div class="row">
                          <div class="col-md-12 mt-1">
                            <p>
                              <strong>Description</strong> : {{ news.content }}
                            </p>
                          </div>
                        </div>
                        <button
                          class="btn btn-outline-info"
                          @click="updateStatus"
                        >
                          {{ news.status }}
                        </button>
                        <button
                          class="btn btn-outline-danger p-2"
                          style="margin-top: 1em"
                          @click="deleteNews"
                        >
                          delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="col-md-2"></div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  //   data: {
  //     id: key,
  //   },
  name: "HomePage",
  emits: ["fetchDataNews", "deleteDataNews", "updateDataStatus"],
  props: ["dataNews"],
  created() {
    this.$emit("fetchDataNews");
  },
  methods: {
    // deleteNews() {
    //   this.$emit("deleteDataNews", this.id);
    // },
    // updateStatus() {
    //   this.$emit("updateDataStatus", this.id);
    // },
  },
};
</script>
