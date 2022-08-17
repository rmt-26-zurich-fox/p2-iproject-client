<template>
  <div id="add-food">
    <div class="d-flex justify-content-center">
      <div class="card shadow" style="margin-top: 100px; width: 25rem">
        <div class="card-body">
          <FormCloth />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormCloth from "../components/FormCloth.vue";

export default {
  components: {
    FormCloth,
  },
};
</script>
