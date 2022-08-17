<template>
  <div class="main-page">
    <section>
      <HeaderBar />
    </section>
    <section>
      <main>
        <RouterView />
      </main>
    </section>
    <section>
      <FooterBar />
    </section>
  </div>
</template>
<script>
import HeaderBar from "../components/HeaderBar.vue";
import FooterBar from "../components/FooterBar.vue";
export default {
  components: { HeaderBar, FooterBar },
};
</script>
