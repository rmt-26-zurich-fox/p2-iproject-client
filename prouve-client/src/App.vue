<template>
  <NavBar v-if="this.$route.name !== 'landing'" />
  <router-view v-if="this.$route.name === 'landing'" />
  <div class="flex">
    <!-- <SideBar> -->
    <SideBar v-if="this.$route.name === 'shop'" />
    <main class="flex-1" :class="[this.$route.name === 'shop' ? 'ml-40' : '']">
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <router-view v-if="this.$route.name !== 'landing'" />
        <div class="flex justify-center" v-show="this.$route.name === 'login'">
          <!-- <div id="google-btn"></div> -->
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import SideBar from "./components/SideBar.vue";
import RecipePreview from "./views/RecipePreview.vue";

export default {
  components: {
    NavBar,
    SideBar,
    RecipePreview,
  },
};
</script>
