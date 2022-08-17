<template>
  <NavBar v-if="this.$route.name !== 'landing'" />
  <router-view v-if="this.$route.name === 'landing'" />
  <router-view v-if="this.$route.name === 'checkout'" />

  <div class="flex">
    <!-- <SideBar> -->
    <SideBar v-if="this.$route.name === 'shop'" />
    <main class="flex-1" :class="[this.$route.name === 'shop' ? 'ml-40' : '']">
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <router-view
          v-if="
            this.$route.name !== 'landing' && this.$route.name !== 'checkout'
          "
        />
        <div class="flex justify-center" v-show="this.$route.name === 'login'">
          <div id="google-btn"></div>
        </div>
      </div>
    </main>
    <LoadingComp v-if="isLoading" />
    <!-- <div
      class="fb-login-button"
      data-width=""
      data-size="medium"
      data-button-type="continue_with"
      data-layout="default"
      data-auto-logout-link="false"
      data-use-continue-as="false"
    ></div> -->
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import SideBar from "./components/SideBar.vue";
import RecipePreview from "./views/RecipePreview.vue";
import { mapState } from "pinia";
import { mapActions } from "pinia";
import { productStore } from "./stores/product";
import LoadingComp from "./components/LoadingComp.vue";

export default {
  components: {
    NavBar,
    SideBar,
    RecipePreview,
    LoadingComp,
  },

  computed: {
    ...mapState(productStore, ["isLoading"]),
  },

  methods: {
    ...mapActions(productStore, ["handleCredentialResponse"]),
  },

  mounted() {
    const handleCredential = this.handleCredentialResponse;
    window.onload = function () {
      google.accounts.id.initialize({
        client_id:
          "841049807390-bnmbpndkcmc1qtc16gieg6l5dqkm62vc.apps.googleusercontent.com",
        callback: handleCredential,
      });
      google.accounts.id.renderButton(document.getElementById("google-btn"), {
        theme: "outline",
        size: "large",
      });
    };
  },
};
</script>
