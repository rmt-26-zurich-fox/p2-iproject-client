<script>
import NavBar from "../components/NavBar.vue";
import FooterBar from "../components/FooterBar.vue";
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  name: "RegisterView",
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
    ...mapActions(useCounterStore, ["handleRegister"]),
    btnSubmit() {
      this.handleRegister(this.dataForm);
    },
  },
};
</script>
<template>
  <div class="register-form">
    <!--Navbar-->
    <NavBar />
    <div class="register-form-action">
      <div class="register-form-action-banner">
        <img src="../assets/health-1.png" alt="" />
      </div>
      <div class="register-form-action-form">
        <form action="" v-on:submit.prevent="btnSubmit" class="form-register">
          <h1>Daftar Sekarang</h1>
          <p>
            Sudah punya akun MyDoctor?
            <span class="toBlue features-cursor-pointer">Masuk</span>
          </p>
          <input type="text" placeholder="Email..." v-model="dataForm.email" />

          <input
            type="password"
            placeholder="Password..."
            v-model="dataForm.password"
          />
          <button class="button-style">Daftar</button>
          <p>
            Register as Doctor?
            <router-link :to="{ name: 'registerAsDoctor' }"
              ><span class="toBlue features-cursor-pointer"
                >Click here</span
              ></router-link
            >
          </p>
        </form>
      </div>
    </div>
    <!--Footer-->
    <FooterBar />
  </div>
</template>
