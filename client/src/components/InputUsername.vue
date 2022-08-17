<script>
export default {
  props: ["isLogged"],
  methods: {
    sendUserName: function () {
      // If there is a userName, input-name emits a set-name event with the userName to the parent component (app)
      if (this.userName.length > 0) {
        this.$emit("set-name", this.userName);
      }
    },
  },
  data() {
    return {
      userName: "",
    };
  },
};
</script>
<template>
  <div id="nameInput" v-show="!isLogged">
    <div class="field is-grouped">
      <div class="control">
        <input
          v-model="userName"
          v-on:keydown.enter="sendUserName"
          class="input is-primary"
          placeholder="Your name"
        />
      </div>
      <div class="control">
        <button
          v-on:click="sendUserName"
          :disabled="!userName"
          class="button is-primary"
        >
          Enter
        </button>
      </div>
    </div>
  </div>
</template>
