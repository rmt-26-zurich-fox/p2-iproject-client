<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  data: () => ({
    symptomId: [],
  }),
  methods: {
    ...mapActions(useCounterStore, ["fetchSymptoms", "fetchDisease"]),
    onClickFilterBtn() {
      if (this.symptomId.length === 0) {
      } else {
        this.fetchDisease(this.symptomId);
      }
    },
  },
  computed: {
    ...mapState(useCounterStore, ["symptom", "disease"]),
  },
  created() {
    this.fetchSymptoms();
  },
};
</script>

<template>
  <!-- <div class="features-filter-checkbox">
    <h2>Gejala umum</h2>
    <form action="" v-on:submit.prevent="onClickFilterBtn">
      <div class="overflow-y">
        <div v-for="data in symptom" :key="data.id">
          <input
            type="checkbox"
            :id="data.name"
            :name="data.name"
            :value="data.id"
            v-model="symptomId"
          />
          <label :for="data.name">{{ data.name }}</label>
        </div>
      </div>
      <button class="button-style-filter">Filter</button>
    </form>
  </div> -->

  <div class="filter">
    <div class="features-filter-title"><h2>Filter pencarianmu</h2></div>
    <div class="features-filter-checkbox">
      <h2>Gejala umum</h2>
      <form action="" v-on:submit.prevent="onClickFilterBtn">
        <div class="overflow-y">
          <div v-for="data in symptom" :key="data.id">
            <input
              type="checkbox"
              :id="data.name"
              :name="data.name"
              :value="data.id"
              v-model="symptomId"
            />
            <label :for="data.name">{{ data.name }}</label>
          </div>
        </div>
        <button class="button-style-filter">Filter</button>
      </form>
    </div>

    <FilterBar />
    <hr />
    <p>
      Tidak menemukan pencarian? <br /><span class="fontSize"
        >Tanya dokter
        <span class="toBlue underscore features-cursor-pointer"
          >disini</span
        ></span
      >
    </p>
  </div>
  <div class="diagnosa">
    <div class="diagnosa-title"><h1>Diagnosa penyakitmu</h1></div>
    <div class="diagnosa-result">
      <div
        v-if="symptomId.length !== 0"
        v-for="(data, idx) in disease"
        :key="data.id"
      >
        <p>{{ idx + 1 + ". " + data.Disease.name }}</p>
      </div>
      <div v-else><p></p></div>
    </div>
    <FilterResult />
  </div>
</template>
