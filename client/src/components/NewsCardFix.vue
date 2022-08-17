<script>
import ButtonComponent from "../components/ButtonComponent.vue";
import { mapState, mapActions } from "pinia";
import { useMain } from "../stores/main";
export default {
  name: "NewsCard",
  components: {
    ButtonComponent,
  },
  computed: {},
  methods: {},
  props: [],
};
</script>
<template>
  <div class="col">
    <div class="card shadow rounded-3">
      <div class="card-body static-card">
        <span
          class="badge bg-danger px-2 py-1 shadow-1-strong mb-3"
          id="detail-category"
        ></span>
        <img src="" class="card-img-top" />
        <h5 class="card-title"></h5>

        <p class="card-text"></p>
      </div>
      <ButtonComponent
        buttonType="submit"
        buttonClass="card-button"
        buttonText="Team Detail"
      />
    </div>
  </div>
</template>
