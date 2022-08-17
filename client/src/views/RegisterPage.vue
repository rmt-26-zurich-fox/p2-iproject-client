<template>
  <LoadingSign v-if="isLoading" />
  <div v-if="!isLoading" class="container pt-5 pb-5">
    <div class="row justify-content-center">
      <div class="col-md-9 col-lg-5">
        <div class="p-4 p-md-5 border">
          <h1 class="text-center">Serum</h1>
          <p class="lead text-center">Sign up to see amazing houses.</p>
          <form @submit.prevent="handleRegisterSubmit">
            <div class="form-group mb-3">
              <label class="form-label">First Name</label>
              <input v-model="register.firstName" type="text" class="form-control" placeholder="enter your username here" />
            </div>
            <div class="form-group mb-3">
              <label class="form-label">Last Name</label>
              <input v-model="register.lastName" type="text" class="form-control" placeholder="enter your username here" />
            </div>
            <div class="form-group mb-3">
              <label class="form-label">Phone Number</label>
              <input v-model="register.phone" type="text" class="form-control" placeholder="enter your phone number here" />
            </div>
            <div class="form-group mb-3">
              <label class="form-label">Email Address</label>
              <input v-model="register.email" type="email" class="form-control" placeholder="enter your email here" />
            </div>
            <div class="form-group mb-3">
              <label class="form-label">Username</label>
              <input v-model="register.username" type="text" class="form-control" placeholder="enter your address here" />
            </div>
            <div class="form-group mb-3">
              <label class="form-label">Password</label>
              <input v-model="register.password" type="password" class="form-control" placeholder="enter your password here" />
            </div>
            <div class="form-group">
              <ButtonLayout type="submit" class="btn-primary form-control" buttonName="Sign up" />
            </div>
          </form>
          <p class="mt-2">
            Already have an account?
            <router-link to="/login" style="text-decoration: none; color: blue">Login</router-link>
          </p>
          <p class="mt-2">
            Browse house first?
            <router-link to="/" style="text-decoration: none; color: blue">Back to Home</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonLayout from "../components/ButtonLayout.vue";
import { mapActions, mapWritableState } from "pinia";
import { useRegisterStore } from "../stores/user";
import { useHouseStore } from "../stores/house";
import Swal from "sweetalert2";
import LoadingSign from "../components/LoadingSign.vue";

export default {
  components: {
    ButtonLayout,
    LoadingSign,
  },

  data() {
    return {
      register: {
        firstName: "",
        lastName: "",
        phone: "",
        username: "",
        email: "",
        password: "",
      },
    };
  },

  methods: {
    ...mapActions(useRegisterStore, ["registerSubmission"]),
    ...mapActions(useHouseStore, ["errorHandler"]),

    async handleRegisterSubmit() {
      this.isLoading = true;
      try {
        await this.registerSubmission(this.register);
        this.$router.push("/login");
        Swal.fire({
          title: "Your account successfully created",
          icon: "success",
          position: "top-end",
          showConfirmButton: false,
          timer: 1000,
        });
      } catch (error) {
        this.errorHandler(error);
      } finally {
        this.isLoading = false;
      }
    },
  },

  computed: {
    ...mapWritableState(useHouseStore, ["isLoading"]),
  },
};
</script>
