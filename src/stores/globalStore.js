import { defineStore } from "pinia";

export const useGlobalStore = defineStore({
  id: "globalStore",
  state: () => ({
    baseUrl: "http://localhost:3000",
  }),
});
