<script>
import NavBar from "../components/NavBar.vue";
import FooterBar from "../components/FooterBar.vue";
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  name: "LoginView",
  components: {
    NavBar,
    FooterBar,
  },
  data: () => ({
    dataForm: {
      email: "",
      password: "",
    },
  }),
  methods: {
    ...mapActions(useCounterStore, ["handleLogin"]),
    btnSubmit() {
      this.handleLogin(this.dataForm);
    },
  },
};
</script>

<template>
  <div class="register-form">
    <!-- Navbar-->
    <NavBar />
    <div class="register-form-action">
      <div class="register-form-action-banner">
        <img src="../assets/health-1.png" alt="" />
      </div>
      <div class="register-form-action-form">
        <form action="" v-on:submit.prevent="btnSubmit" class="form-register">
          <h1>Masuk Sekarang</h1>
          <p>
            Belum punya akun MyDoctor?
            <span class="toBlue features-cursor-pointer">Masuk</span>
          </p>
          <input type="text" placeholder="Email..." v-model="dataForm.email" />

          <input
            type="password"
            placeholder="Password..."
            v-model="dataForm.password"
          />
          <button class="button-style">Masuk</button>
        </form>
      </div>
    </div>
    <!--Footer-->
    <FooterBar />
  </div>
</template>
