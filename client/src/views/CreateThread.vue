<script>
import ButtonComponent from "../components/ButtonComponent.vue";
import { mapState, mapActions } from "pinia";
import { useMain } from "../stores/main";

export default {
  name: "CreateThread",
  components: {
    ButtonComponent,
  },
  methods: {
    createHandler() {
      this.createAThread(this.newThread);
    },
    ...mapActions(useMain, ["createAThread"]),
  },
  computed: {
    ...mapState(useMain, []),
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
  created() {},
};
</script>
<template>
  <section class="vh-200" id="register_page">
    <div class="container py-5 h-100">
      <div class="row d-flex align-items-center justify-content-center h-100">
        <div class="col-sm-12 col-md-12 col-lg-12 mx-auto">
          <!-- <div class="card border-0 shadow rounded-3 my-5 login-card"> -->
          <div class="card-body p-4 p-sm-5 shadow create-thread-card rounded-3">
            <form id="registerForm" @submit.prevent="createHandler">
              <div class="form-outline mb-4">
                <h1 class="text-center">Create a Thread</h1>
              </div>
              <!-- Username input -->
              <div class="form-outline mb-4">
                <label class="form-label thread-label" for="registerUsername"
                  >Title</label
                >
                <input
                  id="registerUsername"
                  type="text"
                  class="form-control"
                  placeholder="Your Thread's Title"
                  v-model="newThread.title"
                />
              </div>

              <!-- Description input -->
              <div class="mb-3">
                <label for="selfDescription" class="form-label thread-label"
                  >Thread Description</label
                >
                <textarea
                  class="form-control"
                  id="selfDescription"
                  rows="3"
                  placeholder="What do you want to discuss?"
                  v-model="newThread.description"
                ></textarea>
              </div>

              <!-- phone number input -->
              <div class="mb-3">
                <label for="explicit" class="form-label thread-label"
                  >Explicit Content</label
                >
                <select
                  name="explicit"
                  class="form-select"
                  aria-label="Default select example"
                  v-model="newThread.explicit"
                >
                  <option selected disabled>
                    Does the thread contain any offensive words?
                  </option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="explicit" class="form-label thread-label"
                  >Category</label
                >
                <select
                  name="explicit"
                  class="form-select"
                  aria-label="Default select example"
                  v-model="newThread.category"
                >
                  <option selected disabled>What's the thread category?</option>
                  <option value="1">NBA Team</option>
                  <option value="2">NBA Players</option>
                  <option value="3">Others</option>
                </select>
              </div>
              <ButtonComponent
                buttonType="submit"
                buttonClass="btn btn-primary btn-lg"
                buttonText="Create Thread"
              />
            </form>
          </div>
        </div>
        <!-- </div> -->
      </div>
    </div>
  </section>

  <RouterView />
</template>
