import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";
export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    map: "",
    type: "",
    strategy: [],
    agents: [],
    agent: {},
  }),
  actions: {
    async getStrategies(map, type, site) {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/${map}/${type}/${site}`
        );
        this.strategy = data;
        router.push("/strategy");
      } catch (error) {
        console.log(error);
      }
    },
    getMap(map) {
      this.map = map;
      router.push("/type");
    },
    getType(type) {
      this.type = type;
      router.push("/site");
    },
    getSite(site) {
      this.getStrategies(this.map, this.type, site);
    },
    async getAgents() {
      try {
        const { data } = await axios.get("http://localhost:3000/agents");
        this.agents = data;
      } catch (error) {
        console.log(error);
      }
    },
    getAgent(agent) {
      this.agent = agent;
      router.push("/detail");
    },
  },
});
