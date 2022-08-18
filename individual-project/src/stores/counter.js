import axios from "axios";
import { defineStore } from "pinia";
import Swal from "sweetalert2";
import axiosInstance from "../apis/instance";
export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    isLogin: false,
    topDoctor: [],
    symptom: [],
    disease: [],
    profile: {},
    midtransToken: "",
    doctors: [],
    celcius: "",
  }),

  actions: {
    async handleRegister(dataForm, dataSpecialization) {
      try {
        if (!dataSpecialization) {
          const data = await axiosInstance.post(
            "/users/userRegister",
            dataForm
          );
          Swal.fire({
            icon: "success",
            title: `Success Register`,
            showConfirmButton: false,
            timer: 1000,
          });
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
        localStorage.setItem("role", data.data.role);
        this.isLogin = true;
        if (data.data.role === "Doctor") {
          const data = await axiosInstance.patch(
            "/doctors",
            { status: "Online" },
            {
              headers: { access_token: localStorage.access_token },
            }
          );
        }
        Swal.fire({
          icon: "success",
          title: `Success Login`,
          showConfirmButton: false,
          timer: 1000,
        });
        this.router.push("/");
      } catch (error) {}
    },
    async handleLogout() {
      try {
        if (localStorage.role === "Doctor") {
          const data = await axiosInstance.patch(
            "/doctors",
            { status: "Offline" },
            {
              headers: { access_token: localStorage.access_token },
            }
          );
        }
        this.isLogin = false;
        localStorage.clear();
        Swal.fire({
          icon: "success",
          title: `Success Logout`,
          showConfirmButton: false,
          timer: 1000,
        });
        this.router.push("/login");
      } catch (error) {}
    },
    async fetchTopDoctor() {
      try {
        const data = await axiosInstance.get("/doctors/favouriteDoctors");

        this.topDoctor = data.data.getFavourite;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchSymptoms() {
      try {
        const data = await axiosInstance.get("/symptom");
        this.symptom = data.data.symptom;
      } catch (error) {}
    },

    async fetchDisease(symptomId) {
      try {
        const data = await axiosInstance.get(
          `/diseases?symptomId=${symptomId}`
        );

        this.disease = data.data.getDisease;
      } catch (error) {
        console.log(error);
      }
    },

    async fetchProfile() {
      try {
        const data = await axiosInstance.get(`/profiles`, {
          headers: { access_token: localStorage.access_token },
        });

        this.profile = data.data.getProfile;
        this.celcius = data.data.getTemperature;
      } catch (error) {
        console.log(error);
      }
    },

    async updateProfile(userId) {
      console.log(userId);
      try {
        const data = await axiosInstance.put(
          `/profiles/${userId}`,
          {
            data: {
              firstName: this.profile.firstName,
              lastName: this.profile.lastName,
              dateOfBirth: this.profile.dateOfBirth,
              gender: this.profile.gender,
              height: this.profile.height,
              imageUrl: this.profile.imageUrl,
              phoneNumber: this.profile.phoneNumber,
              location: this.profile.location,
            },
          },
          {
            headers: { access_token: localStorage.access_token },
          }
        );
        Swal.fire({
          icon: "success",
          title: `Success Update Profile`,
          showConfirmButton: false,
          timer: 1000,
        });
      } catch (error) {
        console.log(error);
      }
    },

    async getTokenMidtrans() {
      try {
        const { data } = await axiosInstance.get("/midtrans/payment", {
          headers: {
            access_token: localStorage.access_token,
          },
        });
        // console.log(data);
        this.midtransToken = data.transactionToken;
        console.log(this.midtransToken);
      } catch (error) {
        console.log(error);
      }
    },

    async fetchDoctor() {
      try {
        const data = await axiosInstance.get("/doctors");
        this.doctors = data.data.getDoctor;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },

    async payButton(midtransToken, phoneNumber) {
      try {
        window.snap.pay(`${midtransToken}`, {
          onSuccess: function (result) {
            /* You may add your own implementation here */
            //   alert("payment success!");
            Swal.fire({
              icon: "success",
              title: `Payment Success!`,
              showConfirmButton: false,
              timer: 1000,
            });
            window.location.href = `https://wa.me/${phoneNumber}`;
            console.log(result);
          },
          onPending: function (result) {
            /* You may add your own implementation here */
            //   alert("wating your payment!");
            Swal.fire({
              icon: "success",
              title: `Wating Your Payment!`,
              showConfirmButton: false,
              timer: 1000,
            });
            console.log(result);
          },
          onError: function (result) {
            /* You may add your own implementation here */
            //   alert("payment failed!");
            Swal.fire({
              icon: "success",
              title: `Payment failed!`,
              showConfirmButton: false,
              timer: 1000,
            });
            console.log(result);
          },
          onClose: function () {
            /* You may add your own implementation here */
            //   alert("you closed the popup without finishing the payment");
          },
        });
      } catch (error) {
        console.log(error);
      }
    },

    async addFavourite(doctorId) {
      console.log(doctorId);
      try {
        const data = await axiosInstance.patch(
          `/doctors/favouriteDoctors/${doctorId}`,
          {},
          {
            headers: {
              access_token: localStorage.access_token,
            },
          }
        );
      } catch (error) {
        console.log(error);
      }
    },
  },
});
