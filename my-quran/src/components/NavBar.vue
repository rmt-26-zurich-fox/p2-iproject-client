<template>
<section class="nav-bar">
    <h3 @click="changePage">My Qur'an</h3>
  </section>
</template>

<script>
import { mapActions } from 'pinia';
import { quranStore } from '../stores/quranStore';

export default {
  methods: {
    ...mapActions(quranStore, ['navBarNavigation']),
    changePage(){
      this.navBarNavigation()
    }
  }
}
</script>