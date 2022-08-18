<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  methods: {
    ...mapActions(useCounterStore, ["fetchTopDoctor"]),
  },
  computed: {
    ...mapState(useCounterStore, ["topDoctor"]),
  },
  created() {
    this.fetchTopDoctor();
  },
};
</script>

<template>
  <div class="card" v-for="doctor in topDoctor" :key="doctor.id">
    <!-- {{ doctor.User.Profile }} -->
    <div class="card-image" v-if="doctor.User.Profile">
      <img :src="doctor.User.Profile.imageUrl" alt="" />
    </div>
    <div class="card-content-child">
      <h1 v-if="doctor.User.Profile">
        {{ doctor.User.Profile.firstName + " " + doctor.User.Profile.lastName }}
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
    </div>
  </div>
</template>
