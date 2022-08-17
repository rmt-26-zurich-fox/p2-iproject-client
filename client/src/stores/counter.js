import { defineStore } from "pinia";
import axios from "axios";
export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    counter: 0,
  }),
  actions: {},
});
