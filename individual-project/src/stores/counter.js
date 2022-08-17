import { defineStore } from "pinia";
import Swal from "sweetalert2";
import axiosInstance from "../apis/instance";
export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    isLogin: false,
    topDoctor: [],
  }),

  actions: {
    async handleRegister(dataForm, dataSpecialization) {
      try {
        if (!dataSpecialization) {
          const data = await axiosInstance.post(
            "/users/userRegister",
            dataForm
          );
          this.router.push("/login");
        } else {
          const dataDoctor = await axiosInstance.post(
            "/doctors/doctorRegister",
            dataForm
          );

          const secondData = await axiosInstance.post(
            "/doctors/doctorSpecializations",
            {
              data: {
                userId: dataDoctor.data.id,
                specialization_one: dataSpecialization.specialization_one,
                specialization_two: dataSpecialization.specialization_two,
                specialization_three: dataSpecialization.specialization_three,
                specialization_four: dataSpecialization.specialization_four,
              },
            }
          );
          this.router.push("/login");
        }
      } catch (error) {}
    },
    async handleLogin(dataForm) {
      try {
        const data = await axiosInstance.post("/users/userLogin", dataForm);
        localStorage.setItem("access_token", data.data.access_token);
        this.isLogin = true;
        this.router.push("/");
      } catch (error) {}
    },
    async handleLogout() {
      try {
        this.isLogin = false;
        localStorage.clear();
        this.router.push("/login");
      } catch (error) {}
    },
    async fetchTopDoctor() {
      try {
        const data = await axiosInstance.get("/doctors/favouriteDoctors", {
          headers: { access_token: localStorage.access_token },
        });
        console.log(data);
        this.topDoctor = data.data.getFavourite;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
