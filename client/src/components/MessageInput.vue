<script>
export default {
  props: [],
  methods: {
    send: function () {
      // If there is a message, input-message emits a send-message event with the message to the parent component (app)
      if (this.message.length > 0) {
        this.$emit("send-message", this.message);
        this.message = "";
      }
    },
  },
  data() {
    return {
      message: "",
    };
  },
};
</script>
<template>
  <div class="controls field has-addons">
    <div class="control is-expanded">
      <input
        v-model="message"
        v-on:keydown.enter="send"
        class="input is-primary"
        placeholder="Write message"
      />
    </div>
    <div class="control">
      <!-- we disable the button when message has not completed -->
      <button v-on:click="send" :disabled="!message" class="button is-primary">
        Send
      </button>
    </div>
  </div>
</template>
