<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  name: "ProfileCard",
  methods: {
    ...mapActions(useCounterStore, ["fetchProfile", "updateProfile"]),
    btnUpdate(userId) {
      this.updateProfile(userId);
    },
  },
  computed: {
    ...mapState(useCounterStore, ["profile"]),
    date() {
      const day = new Date(this.profile.dateOfBirth);
      const dd = day.getDate();
      const mm = day.getMonth();
      const yyyy = day.getFullYear();
      return dd + "/" + mm + "/" + yyyy;
    },
  },
  created() {
    this.fetchProfile();
  },
};
</script>

<template>
  <div class="profile">
    <!-- {{ profile }} -->

    <form action="" v-on:submit.prevent="btnUpdate(profile.userId)">
      <div class="profile-data">
        <h1>Profile</h1>
        <input
          type="text"
          placeholder="First Name..."
          v-model="profile.firstName"
        />
        <input
          type="text"
          placeholder="Last Name..."
          v-model="profile.lastName"
        />
        <input
          type="date"
          placeholder="Date of Birth..."
          v-model="profile.dateOfBirth"
        />
        <input type="text" placeholder="Gender..." v-model="profile.gender" />
        <input type="text" placeholder="Height..." v-model="profile.height" />
        <input
          type="text"
          placeholder="Image Url..."
          v-model="profile.imageUrl"
        />
        <button class="button-style">Daftar</button>
      </div>
    </form>
  </div>
</template>
