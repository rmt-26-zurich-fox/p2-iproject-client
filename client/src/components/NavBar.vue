<script>
import ButtonComponent from "../components/ButtonComponent.vue";
import { mapState, mapActions } from "pinia";
import { useMain } from "../stores/main";

export default {
  name: "NavBar",
  components: {
    ButtonComponent,
  },
  data() {
    return {};
  },
  methods: {
    logoutHandler() {
      this.logout();
    },
    ...mapActions(useMain, ["logout"]),
  },
  computed: {
    ...mapState(useMain, ["isLoggedIn", "userProfile"]),
  },
};
</script>
<template>
  <nav>
    <div class="logo">
      <div id="logo">
        <h3>NBA for U</h3>
      </div>
    </div>
    <div class="links">
      <ul>
        <li v-if="isLoggedIn">
          <router-link to="/">
            <ButtonComponent buttonClass="navbarButton" buttonText="Home" />
          </router-link>
        </li>
        <li v-if="!isLoggedIn">
          <router-link to="/register">
            <ButtonComponent buttonClass="navbarButton" buttonText="Register" />
          </router-link>
        </li>
        <li v-if="isLoggedIn">
          <router-link to="/favourites">
            <ButtonComponent
              buttonClass="navbarButton"
              buttonText="Your Fav Teams"
            />
          </router-link>
        </li>
        <li v-if="isLoggedIn">
          <router-link to="/threads/create">
            <ButtonComponent
              buttonClass="navbarButton"
              buttonText="Create a Thread"
            />
          </router-link>
        </li>
        <li v-if="isLoggedIn">
          <router-link to="/profile">
            <ButtonComponent buttonClass="navbarButton" buttonText="Profile" />
          </router-link>
        </li>
        <li v-if="!isLoggedIn">
          <router-link to="/login">
            <ButtonComponent buttonClass="navbarButton" buttonText="Login" />
          </router-link>
        </li>
        <li v-if="isLoggedIn" @click="logoutHandler">
          <ButtonComponent buttonClass="navbarButton" buttonText="Logout" />
        </li>
      </ul>
    </div>
    <div class="dashboard">
      <p v-if="!isLoggedIn">Hello Strangers!</p>
      <p v-else>Hello {{ userProfile.firstName }}!</p>
    </div>
  </nav>
</template>
