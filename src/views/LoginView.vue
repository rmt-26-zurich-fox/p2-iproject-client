<script>
import SocialLoginButton from "../components/SocialLoginButton.vue";
export default {
  name: "LoginView",
  components: { SocialLoginButton },
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
        <SocialLoginButton :socialType="'discord'" />
        <SocialLoginButton :socialType="'facebook'" />
        <SocialLoginButton :socialType="'github'" />
      </div>
    </div>
  </div>
</template>

<style></style>
