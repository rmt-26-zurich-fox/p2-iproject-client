import { defineStore } from "pinia";
import supabase from "../helpers/supabase";
import wyr from "../apis/wyrApi";

export const useWyrStore = defineStore({
  id: "wyr",
  state: () => ({
    // some state
    questionA: "",
    questionB: "",
  }),
  actions: {
    async socialLoginHandler(socialType) {
      console.log(socialType);
      const { user, session, error } = await supabase.auth.signIn(
        {
          provider: socialType,
        },
        {
          redirectTo: "http://localhost:5173/lobby",
        }
      );
      console.log(user, session, error);
    },
    async getQuestion() {
      try {
        const { data } = await wyr.get("/questions");
        console.log(data);
        this.questionA = data.questionA;
        this.questionB = data.questionB;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
