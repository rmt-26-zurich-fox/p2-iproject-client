<template>
  <div id="registerPage" style="margin-top: 8vh">
    <div class="d-flex justify-content-center">
      <div class="card shadow" style="width: 25rem">
        <div class="card-body">
          <h2 class="d-flex justify-content-center">Register</h2>
          <form @submit.prevent="createUser">
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="registerEmail"
                placeholder="name@example.com"
                v-model="data.email"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="password"
                class="form-control"
                id="registerPassword"
                placeholder="Password"
                v-model="data.password"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="registerAddress"
                placeholder="Address"
                v-model="data.name"
              />
              <label for="registerAddress">Name</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="registerPhoneNumber"
                placeholder="Phone Number"
                v-model="data.phoneNumber"
              />
              <label for="floatingPassword">Phone Number</label>
            </div>

            <div class="d-flex flex-row-reverse">
              <AnyButton
                class="btn btn-primary ms-2"
                buttonType="submit"
                buttonName="Submit"
              />
              <router-link to="/login">
                <span class="btn logout-button btn btn-outline-primary">
                  Cancel
                </span>
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AnyButton from "../components/AnyButton.vue";
import { useCounterStore } from "../stores/counter";
import { mapActions } from "pinia";
export default {
  components: {
    AnyButton,
  },
  data() {
    return {
      data: {
        email: "",
        password: "",
        phoneNumber: "",
        name: "",
      },
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["handleRegister"]),
    createUser() {
      this.handleRegister(this.data);
    },
  },
};
</script>
