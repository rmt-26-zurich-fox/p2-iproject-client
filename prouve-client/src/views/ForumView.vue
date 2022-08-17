<template>
  <div class="flex justify-center mt-10" v-if="show">
    <div
      class="block p-6 w-9/12 bg-white rounded-lg border border-gray-200 shadow-md h-fit"
    >
      <form @submit.prevent="submit">
        <label for="title" class="block mb-2 text-sm font-medium text-gray-900"
          >Your title</label
        >
        <input
          id="title"
          rows="4"
          v-model="title"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mb-5"
          placeholder="Title"
        />
        <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Your message</label
        >
        <textarea
          id="message"
          rows="4"
          v-model="content"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Leave a comment..."
        ></textarea>
        <button
          type="submit"
          class="flex float-right items-center p-2 pl-3 text-base font-normal rounded-lg bg-green-300 mt-5"
        >
          <img
            class="w-6"
            src="https://img.icons8.com/offices/40/000000/enter-key.png"
          />
          <span class="font-semibold text-gray-800 text-base ml-2 pr-2"
            >Post</span
          >
        </button>
      </form>
    </div>
  </div>
  <div class="flex justify-end mt-10">
    <div class="mr-40">
      <button
        v-if="!show"
        @click="showForm"
        class="flex items-center p-2 pl-3 text-base font-normal rounded-lg bg-gray-100"
      >
        <img
          class="w-6"
          src="https://img.icons8.com/ios/50/000000/book-and-pencil.png"
        />
        <span class="font-semibold text-gray-800 text-base ml-2 pr-2"
          >Post Thread</span
        >
      </button>
    </div>
  </div>

  <ForumCard v-for="thread in threads" :key="thread.id" :thread="thread" />
</template>

<script>
import ForumCard from "../components/ForumCard.vue";
import { mapActions } from "pinia";
import { mapState } from "pinia";
import { productStore } from "../stores/product";

export default {
  components: {
    ForumCard,
  },

  data() {
    return {
      show: false,
      title: "",
      content: "",
    };
  },
  computed: {
    ...mapState(productStore, ["threads"]),
  },

  methods: {
    ...mapActions(productStore, ["fetchThread", "createThread"]),
    showForm() {
      if (localStorage.access_token) {
        this.show = true;
      } else {
        this.$router.push({ name: "login" });
      }
    },

    submit() {
      this.createThread(this.title, this.content).then(() => {
        this.show = false;
      });
    },
  },

  beforeMount() {
    this.fetchThread();
  },
};
</script>

<style>
.container3 {
  height: 120px;
  width: 120px;
  position: relative;
}

.vertical-center3 {
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>
