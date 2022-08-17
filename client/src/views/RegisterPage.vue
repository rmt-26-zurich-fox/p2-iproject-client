<script>
import ButtonComponent from "../components/ButtonComponent.vue";
import { mapState, mapActions } from "pinia";
import { useMain } from "../stores/main";

export default {
  name: "RegisterPage",
  components: {
    ButtonComponent,
  },
  methods: {
    registerHandler() {
      // console.log(this.newUser);
      this.register(this.newUser);
    },
    ...mapActions(useMain, ["register"]),
  },
  data() {
    return {
      newUser: {
        email: "",
        password: "",
      },
    };
  },
};
</script>
<template>
  <section class="vh-100" id="login_page">
    <div class="container py-5 h-100">
      <div class="row d-flex align-items-center justify-content-center h-100">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div class="card-body p-4 p-sm-5 shadow rounded-3 login-card">
            <div class="form-outline mb-4">
              <h1 class="text-center">Threads</h1>
            </div>
            <div class="card">
              <div class="card-header">Featured</div>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div class="card">
              <div class="card-header">Featured</div>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div class="card">
              <div class="card-header">Featured</div>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div class="card">
              <div class="card-header">Featured</div>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
