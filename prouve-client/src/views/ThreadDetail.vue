<template>
  <div class="ml-20 mt-5">
    <p class="text-3xl font-semibold">{{ threadById.title }}</p>
  </div>
  <div class="pt-4 mt-2 mb-20 space-y-2 border-t border-gray-200"></div>
  <div class="flex justify-center mt-10">
    <div class="bg-white rounded-lg shadow-md mr-10 h-fit">
      <div class="container3 flex justify-center">
        <div class="vertical-center3">
          <img
            src="https://img.icons8.com/external-sbts2018-outline-color-sbts2018/58/000000/external-user-ecommerce-basic-1-sbts2018-outline-color-sbts2018.png"
          />
        </div>
      </div>
    </div>
    <div
      class="block p-6 w-9/12 bg-gray-100 rounded-lg border border-gray-200 shadow-md h-fit"
    >
      <div class="flex justify-start">
        <div class="w-full">
          <a href="">
            <p class="text-lg font-normal text-gray-800 mt-5">
              {{ threadById.content }}
            </p>
          </a>
          <div class="mt-10">
            <span class="text-base text-gray-800">
              {{ threadById.User.userName }}
            </span>
            <a href="" @click.prevent="showForm"
              ><span
                class="text-base text-gray-800 ml-5 hover:bg-green-300 p-2 pr-3 rounded-lg"
              >
                Reply
              </span></a
            >

            <span class="text-base text-gray-800 float-right">
              {{ dateTime }}
            </span>
          </div>
        </div>
        <div class="mr-0"></div>
      </div>
    </div>
  </div>
  <div class="flex justify-center ml-24 mt-10" v-if="show">
    <div
      class="block p-6 w-9/12 bg-white rounded-lg border border-gray-200 shadow-md h-fit"
    >
      <form @submit.prevent="submit">
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
  <ThreadDetailCard v-for="reply in replies" :key="reply.id" :reply="reply" />
</template>

<script>
import { mapState } from "pinia";
import { mapActions } from "pinia";
import { productStore } from "../stores/product";
import ThreadDetailCard from "../components/ThreadDetailCard.vue";
export default {
  components: {
    ThreadDetailCard,
  },
  data() {
    return {
      show: false,
      content: "",
    };
  },
  methods: {
    ...mapActions(productStore, [
      "fetchThreadById",
      "createReply",
      "fetchReply",
    ]),

    showForm() {
      if (localStorage.access_token) {
        this.show = true;
      } else {
        this.$router.push({ name: "login" });
      }
    },

    submit() {
      this.createReply(this.content, this.threadById.id).then(() => {
        this.show = false;
        this.content = "";
      });
    },
  },
  computed: {
    ...mapState(productStore, ["threadById", "replies"]),

    dateTime() {
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
      };
      let date = new Date(this.threadById.createdAt);
      return new Intl.DateTimeFormat("default", options).format(date);
    },
  },

  beforeMount() {
    this.fetchThreadById(this.$route.params.threadId);
    this.fetchReply(this.$route.params.threadId);
  },
};
</script>
