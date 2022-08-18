<template>
  <form @submit.prevent="addCloth">
    <h3>Add Cloth</h3>

    <div class="floating mb-3">
      <label for="addCategoryId">Customer Email</label>
      <select
        class="form-select"
        aria-label="Default select example"
        id="addCategoryId"
        v-model="cloth.UserId"
      >
        <option selected disabled hidden>--SELECT--</option>
        <option v-for="el in users" :value="el.id">
          {{ el.email }}
        </option>
      </select>
    </div>
    <div class="floating mb-3">
      <label for="addCategoryId">Package</label>
      <select
        class="form-select"
        aria-label="Default select example"
        id="addCategoryId"
        v-model="cloth.PackageId"
      >
        <option selected disabled hidden>--SELECT--</option>
        <option :value="el.id" v-for="el in packages">
          {{ el.name }} ({{ el.price }}) {{ el.deadlineDay }}D
        </option>
      </select>
    </div>
    <div class="form-floating mb-3">
      <input
        type="number"
        class="form-control"
        id="addImage"
        placeholder="weight..."
        v-model="cloth.weight"
      />
      <label for="addImage">Weigth (KG)</label>
    </div>
    <div class="d-flex flex-row justify-content-end">
      <router-link to="/">
        <button type="button" class="btn main-button btn-outline-primary" id="">
          Cancel
        </button>
      </router-link>
      <button class="btn btn-primary ms-2" id="addFood">Submit</button>
    </div>
  </form>
</template>
<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
import AnyButton from "./AnyButton.vue";

export default {
  components: {
    AnyButton,
  },
  data() {
    return {
      cloth: {
        UserId: "",
        PackageId: "",
        weight: "",
      },
    };
  },
  computed: {
    ...mapState(useCounterStore, ["users", "packages"]),
  },
  methods: {
    ...mapActions(useCounterStore, [
      "createCloth",
      "fetchDataUser",
      "fetchDataPackage",
    ]),
    addCloth() {
      this.createCloth(this.cloth);
    },
  },
  created() {
    this.fetchDataUser();
    this.fetchDataPackage();
  },
};
</script>
