<script>
import ButtonComponent from "../components/ButtonComponent.vue";
import { mapState, mapActions } from "pinia";
import { useMain } from "../stores/main";
export default {
  name: "TeamsCard",
  components: {
    ButtonComponent,
  },
  computed: {},
  methods: {
    detailHandler(id) {
      // console.log(id);
      this.fetchOneTeam(id);
    },
    ...mapActions(useMain, ["fetchOneTeam"]),
  },
  props: ["oneTeam"],
};
</script>
<template>
  <div class="col">
    <div class="card shadow rounded-3">
      <div class="card-body static-card">
        <div class="text-center image-container">
          <img
            :src="oneTeam.TeamImage.imageUrl"
            class="team-image card-img-top mx-auto d-block"
          />
        </div>
        <div class="text-center">
          <h2 class="card-title">{{ oneTeam.abbreviation }}</h2>
        </div>
        <div class="text-center">
          <h3 class="card-title">{{ oneTeam.full_name }}</h3>
        </div>
      </div>
      <ButtonComponent
        buttonType="submit"
        buttonClass="card-button"
        buttonText="Team Detail"
        @click="detailHandler(oneTeam.id)"
      />
    </div>
  </div>
</template>
