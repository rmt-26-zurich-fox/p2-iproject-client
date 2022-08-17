import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    user: {},
    isLogin: false,
  }),
  actions: {
    async processLogin(data) {
      try {
        const login = await axios.post(`${baseUrl}/user/login`, {
          email: data.email,
          password: data.password,
        });
        localStorage.setItem("access_token", login.data.access_token);
        // this.fetchDataHero();
        this.user = login.data;
        this.router.push("/");
        Swal.fire("Login Success");
      } catch (error) {
        console.log(error);
        Swal.fire(error.response.data.message);
      }
    },
    processLogout() {
      localStorage.clear();
      this.user = {};
      this.router.push("/login");
    },
  },
});
