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
    <h4 class="text-center">Join Live Chat Now!</h4>
    <div class="field is-grouped">
      <div class="control">
        <input
          v-model="userName"
          v-on:keydown.enter="sendUserName"
          class="form-control"
          placeholder="Your name"
        />
      </div>
      <div class="text-center">
        <button
          v-on:click.prevent="sendUserName"
          :disabled="!userName"
          class="btn btn-primary message-button"
        >
          Enter
        </button>
      </div>
    </div>
  </div>
</template>
