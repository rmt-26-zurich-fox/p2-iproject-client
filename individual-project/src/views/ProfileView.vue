<script>
import NavBar from "../components/NavBar.vue";
import FooterBar from "../components/FooterBar.vue";
import ProfileCard from "../components/ProfileCard.vue";
export default {
  name: "Profile View",
  components: {
    NavBar,
    FooterBar,
    ProfileCard,
  },
};
</script>
<template>
  <div class="container-profile">
    <!--NavBar-->
    <NavBar />
    <!--Footer-->
    <ProfileCard />
    <FooterBar />
  </div>
</template>
