<script>
import { mapActions } from "pinia";
import { useCustomStore } from "../stores/custom";
import NavBarComp from "../components/NavBarComp.vue";

export default {
  data() {
    return {
      profile: {},
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",
    };
  },
  components: {
    NavBarComp,
  },
  methods: {
    ...mapActions(useCustomStore, ["fetchProfileDetail", "editProfileDetail"]),
    formSubmitHandlerEditProfile() {
      this.editProfileDetail(
        this.firstName,
        this.lastName,
        this.address,
        this.phoneNumber
      );
    },
  },
  created() {
    this.fetchProfileDetail((profile) => {
      this.profile = profile;
      this.firstName = profile.firstName;
      this.lastName = profile.lastName;
      this.address = profile.address;
      this.phoneNumber = profile.phoneNumber;
    });
  },
};
</script>

<template>
  <NavBarComp />
  <div class="card">
    <div class="card-header text-center title">Profile Page</div>
    <div class="card-body text-center">
      <!-- Form Here -->
      <form @submit.prevent="formSubmitHandlerEditProfile">
        <div class="form-group row text-center">
          <div class="mb-3">
            <label for="form-edit-first-name" class="form-label"
              >First Name</label
            >
            <input
              v-model="firstName"
              type="text"
              id="form-edit-first-name"
              class="form-control"
              placeholder="John"
              style="width: 70%"
            />
          </div>

          <div class="mb-3">
            <label for="form-edit-last-name" class="form-label"
              >Last Name</label
            >
            <input
              v-model="lastName"
              type="text"
              id="form-edit-last-name"
              class="form-control"
              placeholder="Doe"
              style="width: 70%"
            />
          </div>

          <div class="mb-3">
            <label for="form-edit-address" class="form-label">Address</label>
            <input
              v-model="address"
              type="text"
              id="form-edit-address"
              class="form-control"
              placeholder="Jl. John Doe"
              style="width: 70%"
            />
          </div>

          <div class="mb-3">
            <label for="form-edit-phoneNumber" class="form-label">
              Phone Number
            </label>
            <input
              v-model="phoneNumber"
              type="text"
              id="form-edit-phoneNumber"
              class="form-control"
              placeholder="08123456789"
              style="width: 70%"
            />
          </div>

          <button class="btn btn-secondary">Edit Profile</button>
        </div>
      </form>
    </div>
  </div>
</template>
