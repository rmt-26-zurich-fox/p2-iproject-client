import { defineStore } from 'pinia'
import housesInstance from "../apis/house";

export const useLoginStore = defineStore({
  id: 'login',
  state: () => ({
    access_token: localStorage.getItem("access_token"),
  }),
  actions: {
    loginSubmission(loginData) {
      return new Promise((resolve, reject) => {
        housesInstance
          .post("login", {
            email: loginData.email,
            password: loginData.password,
          })
          .then(({ data }) => {
            localStorage.setItem("access_token", data.access_token);
            this.access_token = localStorage.getItem("access_token");
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  }
})
