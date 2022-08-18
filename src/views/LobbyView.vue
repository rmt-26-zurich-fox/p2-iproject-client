<script>
import SocialLoginButton from "../components/SocialLoginButton.vue";
import LobbySelector from "../components/LobbySelector.vue";

export default {
  name: "HomeView",
  components: { SocialLoginButton, LobbySelector },
};
</script>

<template>
  <div class="login-container">
    <div class="login-box">
      <div class="would-card">
        <p class="font-title">WOULD</p>
      </div>
      <div class="you-card">
        <p class="font-title">YOU</p>
      </div>
      <div class="rather-card">
        <p class="font-title">RATHER</p>
      </div>
      <div class="login-action-container">
        <LobbySelector />
      </div>
    </div>
  </div>
</template>

<style></style>
