<script>
import { mapActions, mapWritableState } from "pinia";
import { main } from "../stores/counter";

export default {
  props: ["course"],
  methods: {
    ...mapActions(main, ["addToShoppingCart", "addCourseList"]),
    addToCart(courseId) {
      this.addToShoppingCart(courseId);
    },
    addtoList(courseId) {
      this.addCourseList(courseId);
    },
  },
  computed: { ...mapWritableState(main, "isHome") },
};
</script>

<template>
  <div class="row-span-3 p-8">
    <div class="rounded-lg bg-white max-w-sm">
      <div class="p-6">
        <h5 class="text-gray-900 text-xl font-medium mb-2">
          {{ course.title }}
        </h5>
        <p v-if="!isHome" class="text-gray-700 text-base mb-4">
          Duration: {{ course.duration }} Weeks
        </p>
        <p class="text-gray-700 text-base mb-4">
          {{ course.description }}
        </p>
        <button
          v-on:click.prevent="
            addToCart(course.id);
            addtoList(course.id);
          "
          class="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Buy
        </button>
      </div>
    </div>
  </div>
</template>
