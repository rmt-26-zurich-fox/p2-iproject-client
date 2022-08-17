<template>
  <aside class="w-64 fixed ml-10 mt-8" aria-label="Sidebar">
    <div class="overflow-y-auto h-screen py-4 px-3 bg-white">
      <ul class="space-y-2">
        <li>
          <a
            href=""
            @click.prevent="filter()"
            :class="[!this.$route.query.category ? 'z-10 bg-gray-100' : '']"
            class="flex items-center p-2 text-base font-normal rounded-lg text-gray-800 hover:bg-gray-100"
          >
            <img
              class="w-6"
              src="https://img.icons8.com/glyph-neue/64/000000/double-tick.png"
            />
            <span class="flex-1 ml-3 whitespace-nowrap">All</span>
          </a>
        </li>
        <li>
          <a
            href=""
            @click.prevent="filter('pastry')"
            :class="[
              this.$route.query.category === 'pastry' ? 'z-10 bg-gray-100' : '',
            ]"
            class="flex items-center p-2 text-base font-normal rounded-lg text-gray-800 hover:bg-gray-100"
          >
            <img
              class="w-6"
              src="https://img.icons8.com/windows/64/000000/croissant.png"
            />
            <span class="flex-1 ml-3 whitespace-nowrap">Pastries</span>
          </a>
        </li>
        <li>
          <a
            href=""
            @click.prevent="filter('wholecake')"
            :class="[
              this.$route.query.category === 'wholecake'
                ? 'z-10 bg-gray-100'
                : '',
            ]"
            class="flex items-center p-2 text-base font-normal rounded-lg transition duration-75 hover:bg-gray-100 text-gray-800"
          >
            <img
              class="w-6"
              src="https://img.icons8.com/fluency-systems-regular/48/000000/birthday.png"
            />
            <span class="ml-4">Whole Cakes</span>
          </a>
        </li>
        <li>
          <a
            href=""
            @click.prevent="filter('cookie')"
            :class="[
              this.$route.query.category === 'cookie' ? 'z-10 bg-gray-100' : '',
            ]"
            class="flex items-center p-2 text-base font-normal rounded-lg text-gray-800 hover:bg-gray-100"
          >
            <img
              class="w-6"
              src="https://img.icons8.com/ios/50/000000/cookie.png"
            />
            <span class="flex-1 ml-3 whitespace-nowrap">Cookies</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import { mapActions } from "pinia";
import { mapWritableState } from "pinia";
import { productStore } from "../stores/product";
export default {
  computed: {
    ...mapWritableState(productStore, ["initialPage"]),
  },
  methods: {
    ...mapActions(productStore, ["fetchProduct"]),
    scrollToTop() {
      window.scrollTo(0, 0);
    },

    filter(category) {
      if (!category) {
        this.initialPage = 2;
        this.fetchProduct({}).then(() => {
          this.$router.push({
            name: "shop",
          });
        });
        this.scrollToTop();
      } else {
        this.initialPage = 2;
        this.fetchProduct({ category }).then(() => {
          this.$router.push({
            path: "shop",
            query: { category },
          });
        });
        this.scrollToTop();
      }
    },
  },
};
</script>
