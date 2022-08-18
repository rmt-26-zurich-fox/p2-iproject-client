<script>
import SocialLoginButton from "../components/SocialLoginButton.vue";
import GameCard from "../components/GameCard.vue";
import socket from "../helpers/socketio";
export default {
  name: "GameView",
  data() {
    return {
      question: null,
      counter: 5,
      isClicked: false,
    };
  },
  components: { SocialLoginButton, GameCard },
  methods: {
    startGameHandler() {
      this.isClicked = true;
      socket.emit("startgame", "a user started the game");
    },
  },
  created() {
    socket.on("gamestarted", (data) => {
      this.question = data;
    });
    socket.on("counter", (data) => {
      this.counter = data;
    });
    socket.on("gamefinished", (data) => {});
  },
  computed: {
    canStart() {
      if (!this.isClicked) {
        return true;
      }
      if (this.counter === 0) {
        return true;
      } else {
        return false;
      }
    },
  },
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
        <GameCard v-bind:question="this.question" />
      </div>
      <div class="mt-3 font-semibold">
        <div
          class="w-[200px] bg-gray-400 flex justify-center items-center rounded h-10 mb-2 text-white cursor-pointer p-2"
          v-on:click="startGameHandler"
          v-if="canStart"
        >
          Start Game
        </div>
        <div
          class="w-[200px] bg-gray-400 flex justify-center items-center rounded h-10 mb-2 text-white p-2"
          v-if="!canStart"
        >
          {{ counter }}
        </div>
      </div>
    </div>
  </div>
</template>
