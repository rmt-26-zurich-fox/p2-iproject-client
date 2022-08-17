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
    ...mapState(useMain, ["isLoggedIn"]),
  },
};
</script>
<template>
  <nav>
    <div class="logo">
      <div id="logo">
        <img src="../assets/news.png" id="logoImage" />
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
        <li>
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
      <p>Hello Strangers!</p>
      <!-- <p v-if="!isLoggedIn">Hello Strangers!</p>
      <p v-else>Hello {{ user.username }}!</p> -->
    </div>
  </nav>
</template>
