<script>
import NavBar from "../components/NavBar.vue";
import FooterBar from "../components/FooterBar.vue";
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  name: "Profile View",
  components: {
    NavBar,
    FooterBar,
  },
  methods: {
    ...mapActions(useCounterStore, [
      "getTokenMidtrans",
      "fetchDoctor",
      "payButton",
      "addFavourite",
    ]),
    btnPay(phoneNumber) {
      this.payButton(this.midtransToken, phoneNumber);
    },
    btnLike(userId) {
      this.addFavourite(userId);
    },
  },
  computed: {
    ...mapState(useCounterStore, ["midtransToken", "doctors"]),
  },
  created() {
    this.fetchDoctor();
    this.getTokenMidtrans();
  },
};
</script>
<template>
  <div class="container-profile">
    <NavBar />

    <div class="card-chat">
      <div class="card-chat-doctor" v-for="doctor in doctors" :key="doctor.id">
        <div class="card-image" v-if="doctor.User.Profile">
          <img :src="doctor.User.Profile.imageUrl" alt="" />
        </div>
        <div class="card-content-child">
          <h1 v-if="doctor.User.Profile">
            {{
              doctor.User.Profile.firstName + " " + doctor.User.Profile.lastName
            }}
            <span
              class="features-cursor-pointer"
              v-on:click="btnLike(doctor.userId)"
              >👍🏻</span
            >
          </h1>

          <div class="card-specialization">
            <div class="card-specialization-item">
              <span v-if="doctor.User.DoctorSpecialization">{{
                doctor.User.DoctorSpecialization.specialization_one
              }}</span>
              <span v-if="doctor.User.DoctorSpecialization">{{
                doctor.User.DoctorSpecialization.specialization_two
              }}</span>
            </div>
            <div class="card-specialization-item">
              <span v-if="doctor.User.DoctorSpecialization">{{
                doctor.User.DoctorSpecialization.specialization_three
              }}</span>
              <span v-if="doctor.User.DoctorSpecialization">{{
                doctor.User.DoctorSpecialization.specialization_four
              }}</span>
            </div>
          </div>
          <button
            class="button-style-doctors"
            id="pay-button"
            v-on:click="btnPay(doctor.User.Profile.phoneNumber)"
          >
            Chat now
          </button>
        </div>
      </div>
    </div>

    <FooterBar />
  </div>
</template>
