<script>
import socket from "../helpers/socketio";
import supabase from "../helpers/supabase";

export default {
  name: "GameCard",
  props: ["question"],
  methods: {
    handleAnswer(id, answer) {
      const payload = {
        email: supabase.auth.user().email,
        QuestionId: id,
        answer,
      };
      socket.emit("answer", payload);
    },
  },
  computed: {
    getQuestionA() {
      if (!this.question) {
        return "";
      }
      return this.question.questionA;
    },
    getQuestionB() {
      if (!this.question) {
        return "";
      }
      return this.question.questionB;
    },
  },
};
</script>

<template>
  <div class="relative">
    <div
      class="w-[200px] primary-red flex justify-center items-center rounded h-[70px] mb-2 text-white cursor-pointer p-2"
      v-on:click="handleAnswer(this.question.id, 0)"
    >
      {{ getQuestionA }}
    </div>
    <div class="or">OR</div>
    <div
      class="w-[200px] primary-blue flex justify-center items-center rounded h-[70px] text-white cursor-pointer p-2"
      v-on:click="handleAnswer(this.question.id, 1)"
    >
      {{ getQuestionB }}
    </div>
  </div>
</template>
