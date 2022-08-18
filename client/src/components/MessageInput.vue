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
  <div class="send-message-container">
    <input
      v-model="message"
      v-on:keydown.enter="send"
      class="form-control"
      placeholder="Write message"
    />
  </div>

  <!-- we disable the button when message has not completed -->
  <div class="text-center">
    <button
      v-on:click="send"
      :disabled="!message"
      class="btn btn-primary message-button"
    >
      Send
    </button>
  </div>
</template>
