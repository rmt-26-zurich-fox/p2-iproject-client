<template>
  <div class="flex justify-center mt-10">
    <div
      class="block p-6 w-9/12 bg-white rounded-lg border border-gray-200 shadow-md h-fit"
    >
      <div class="flex justify-start">
        <div class="bg-white rounded-lg shadow-md mr-10 h-fit">
          <div class="container3 flex justify-center">
            <div class="vertical-center3">
              <img
                src="https://img.icons8.com/external-sbts2018-outline-color-sbts2018/58/000000/external-user-ecommerce-basic-1-sbts2018-outline-color-sbts2018.png"
              />
            </div>
          </div>
        </div>
        <div class="w-full">
          <a href="" @click.prevent="threadDetail">
            <p class="text-xl font-semibold text-gray-800 mt-5 hover:underline">
              {{ thread.title }}
            </p>
          </a>
          <div class="mt-10">
            <span class="text-base text-gray-800">
              {{ thread.User.userName }}
            </span>
            <span class="text-base text-gray-800 float-right">
              {{ dateTime }}
            </span>
          </div>
        </div>
        <div class="mr-0"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { productStore } from "../stores/product";

export default {
  props: ["thread"],
  computed: {
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
      let date = new Date(this.thread.createdAt);
      return new Intl.DateTimeFormat("default", options).format(date);
    },
  },

  methods: {
    ...mapActions(productStore, ["fetchThreadById", "fetchReply"]),

    threadDetail() {
      this.fetchThreadById(this.thread.id)
        .then(() => {
          return this.fetchReply(this.thread.id);
        })
        .then(() => {
          this.$router.push({ path: `/forum/${this.thread.id}` });
        });
    },
  },
};
</script>
