import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
const provider = new GithubAuthProvider();

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    map: "",
    mapsData: [],
    type: "",
    site: "",
    strategy: [],
    agents: [],
    agent: {},
    isLogin: false,
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
    githubLogin() {
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a GitHub Access Token. You can use it to access the GitHub API.
          const credential = GithubAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;

          // The signed-in user info.
          const user = result.user;
          axios
            .post("http://localhost:3000/github-sign-in", {
              email: user.email,
            })
            .then((res) => {
              localStorage.setItem("access_token", res.data.access_token);
              this.isLogin = true;
              router.push("/");
            })
            .catch((err) => console.log(err));
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GithubAuthProvider.credentialFromError(error);
          // ...
        });
    },
    async fetchMap() {
      try {
        const { data } = await axios.get("http://localhost:3000/map");
        this.mapsData = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
