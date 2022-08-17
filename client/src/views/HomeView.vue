<script>
import SideBar from "../components/SideBar.vue";
export default {
  components: { SideBar },
};
</script>

<template>
  <div
    class="flex"
  >
    <SideBar />
  </div>
  <RouterView />
</template>
