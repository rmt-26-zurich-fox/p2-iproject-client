<script>
import NavBar from "../components/NavBar.vue";
import FooterBar from "../components/FooterBar.vue";
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  name: "RegisterAsDoctor",
  components: {
    NavBar,
    FooterBar,
  },
  data: () => ({
    dataForm: {
      email: "",
      password: "",
    },
    dataSpecialization: {
      specialization_one: "",
      specialization_two: "",
      specialization_three: "",
      specialization_four: "",
    },
  }),
  methods: {
    ...mapActions(useCounterStore, ["handleRegister"]),
    btnSubmit() {
      this.handleRegister(this.dataForm, this.dataSpecialization);
    },
  },
};
</script>

<template>
  <div class="register-form">
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

          <input
            type="text"
            placeholder="Specialization..."
            v-model="dataSpecialization.specialization_one"
          />
          <input
            type="text"
            placeholder="Specialization..."
            v-model="dataSpecialization.specialization_two"
          />
          <input
            type="text"
            placeholder="Specialization..."
            v-model="dataSpecialization.specialization_three"
          />
          <input
            type="text"
            placeholder="Specialization..."
            v-model="dataSpecialization.specialization_four"
          />
          <button class="button-style">Daftar</button>
        </form>
      </div>
    </div>
    <FooterBar />
  </div>
</template>
