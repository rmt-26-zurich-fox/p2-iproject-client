<script>
import { mapActions } from "pinia";
import { useWyrStore } from "../stores/wyr";
export default {
  name: "SocialLoginButton",
  props: ["socialType"],
  methods: {
    ...mapActions(useWyrStore, ["socialLoginHandler"]),
    localSocialLoginHandler() {
      this.socialLoginHandler(this.socialType);
    },
  },
};
</script>

<template>
  <div class="social-btn text-white" v-on:click="localSocialLoginHandler">
    <div class="social-logo" v-if="this.socialType === 'discord'">
      <box-icon type="logo" color="white" name="discord-alt"></box-icon>
      <p>Login with Discord</p>
    </div>
    <div class="social-logo" v-if="this.socialType === 'facebook'">
      <box-icon type="logo" color="white" name="facebook"></box-icon>
      <p>Login with Facebook</p>
    </div>
    <div class="social-logo" v-if="this.socialType === 'github'">
      <box-icon type="logo" color="white" name="github"></box-icon>
      <p>Login with github</p>
    </div>
  </div>
</template>
