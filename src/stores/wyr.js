import { defineStore } from "pinia";
import supabase from "../helpers/supabase";
import wyr from "../apis/wyrApi";

export const useWyrStore = defineStore({
  id: "wyr",
  actions: {
    async socialLoginHandler(socialType) {
      const { user, session, error } = await supabase.auth.signIn(
        {
          provider: socialType,
        },
        {
          redirectTo: "https://would-you-rather-zf.web.app/login/lobby",
        }
      );
      console.log(user, session, error);
    },
  },
});
