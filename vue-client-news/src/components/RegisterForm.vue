<template>
  <form @submit.prevent="createNewUser">
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputEmail">Email</label>
        <input
          v-model="email"
          type="email"
          class="form-control"
          id="inputEmail"
          placeholder="Email"
        />
      </div>
      <div class="form-group col-md-6">
        <label for="inputPassword">Password</label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="inputPassword"
          placeholder="Password"
        />
      </div>
    </div>
    <button type="submit" style="margin-top: 1em" class="btn btn-primary">
      Submit
    </button>
    <button
      @click="back"
      type="button"
      id="loginPage"
      style="margin-top: 1em"
      class="btn btn-light"
    >
      Back
    </button>
  </form>
</template>

<script>
export default {
  name: "RegisterForm",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  emits: ["createUser", "back"],
  methods: {
    createNewUser() {
      this.$emit("createUser", this.email, this.password);
    },
    return() {
      this.$emit("back", false, "login");
    },
  },
};
</script>
