import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";
export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    map: "",
    type: "",
    site: "",
    strategy: [],
    agents: [],
    agent: {},
  }),
  actions: {
    async getStrategies(map, type, site) {
      try {
        const { data } = await axios.get(
          `https://iproject-ahmad-01.herokuapp.com/${map}/${type}/${site}`
        );
        this.strategy = data;
        router.push("/strategy");
      } catch (error) {
        console.log(error);
      }
    },
    getMap(map) {
      this.map = map;
      localStorage.setItem("map", map);
      router.push("/type");
    },
    getType(type) {
      this.type = type;
    },
    getSite(site) {
      this.getStrategies(this.map, this.type, site);
    },
    async getAgents() {
      try {
        const { data } = await axios.get(
          "https://iproject-ahmad-01.herokuapp.com/agents"
        );
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
