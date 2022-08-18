import { defineStore } from "pinia";
import axiosInst from "../apis/axios";
import Swal from "sweetalert2";
import axios from "axios";
import router from "../router";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    counter: 0,
    clothes: "",
    users: "",
    packages: "",
    midtransToken: undefined,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
    async loginFacebook() {
      try {
        let data = await axiosInt.get("auth/facebook");
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
    async handleLogin(data) {
      try {
        let login = await axiosInst.post("/user/login", {
          email: data.email,
          password: data.password,
        });
        localStorage.setItem("access_token", login.data.access_token);
        localStorage.setItem("role", login.data.role);
        localStorage.setItem("email", login.data.email);
        Swal.fire({
          icon: "success",
          title: "Login Success",
          showConfirmButton: false,
          timer: 1500,
        });
        this.isLogin = true;
        this.router.push("/");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Invalid",
          text: error.response.data.message,
        });
      }
    },
    async handleCredentialResponse(response) {
      try {
        let data = await axios(
          `https://iproject-londreeh.herokuapp.com/user/google-sign-in`,
          {
            method: "POST",
            headers: {
              token_google: response.credential,
            },
          }
        );
        localStorage.setItem("access_token", data.data.access_token);
        localStorage.setItem("email", data.data.email);
        localStorage.setItem("role", data.data.role);
        Swal.fire({
          icon: "success",
          title: "Login Success",
          showConfirmButton: false,
          timer: 1500,
        });
        this.isLogin = true;
        this.router.push("/");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Invalid",
          text: "login google error",
        });
      }
    },
    async handleRegister(data) {
      try {
        let user = await axiosInst.post("/user/register", {
          email: data.email,
          password: data.password,
          phoneNumber: data.phoneNumber,
          name: data.name,
        });
        Swal.fire({
          icon: "success",
          title: "You has been registered",
          showConfirmButton: false,
          timer: 1500,
        });
        this.isLogin = true;
        this.router.push("/login");
      } catch (error) {
        console.log(error, "register");
        Swal.fire({
          icon: "error",
          title: "Invalid",
          text: error.response.data.message,
        });
      }
    },
    async fetchDataCloth() {
      try {
        let dataCloth = await axiosInst.get("/cloth", {
          headers: { access_token: localStorage.access_token },
        });
        this.clothes = dataCloth.data;
      } catch (error) {
        console.log(error, "fetch cloth");
        Swal.fire({
          icon: "error",
          title: "Invalid",
          text: error.response.data.message,
        });
      }
    },
    async updateStatusCloth(data) {
      try {
        let change = data;
        let updated = await axios({
          url: `https://iproject-londreeh.herokuapp.com/cloth/${data.id}`,
          method: "PATCH",
          data: change,
          headers: { access_token: localStorage.access_token },
        });
        if (data.status) {
          Swal.fire({
            icon: "success",
            title: "Status has been updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } catch (error) {
        console.log(error, "update status");
        Swal.fire({
          icon: "error",
          title: "Invalid",
          text: error.response.data.message,
        });
      }
    },
    async fetchDataUser() {
      try {
        let dataUser = await axiosInst.get("/cloth/users", {
          headers: { access_token: localStorage.access_token },
        });
        this.users = dataUser.data;
      } catch (error) {
        console.log(error, "data user");
        Swal.fire({
          icon: "error",
          title: "Invalid",
          text: error.response.data.message,
        });
      }
    },
    async fetchDataPackage() {
      try {
        let dataPackage = await axiosInst.get("/cloth/package", {
          headers: { access_token: localStorage.access_token },
        });
        this.packages = dataPackage.data;
        console.log(dataPackage.data);
      } catch (error) {
        console.log(error, "data packages");
        Swal.fire({
          icon: "error",
          title: "Invalid",
          text: error.response.data.message,
        });
      }
    },
    async createCloth(data) {
      try {
        const { UserId, PackageId, weight } = data;
        let added = await axiosInst.post(
          "/cloth",
          {
            UserId,
            PackageId,
            weight,
          },
          {
            headers: { access_token: localStorage.access_token },
          }
        );
        Swal.fire({
          icon: "success",
          title: "New Cloth has been added",
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.push("/");
      } catch (error) {
        console.log(error, "add cloth");
        Swal.fire({
          icon: "error",
          title: "Invalid",
          text: error.response.data.message,
        });
      }
    },
    async generateMidtransToken(data) {
      try {
        const { UserId, totalPrice, id } = data;
        let midtrans = await axiosInst.post(
          "/cloth/payment",
          { UserId, totalPrice, id },
          {
            headers: { access_token: localStorage.access_token },
          }
        );
        return midtrans.data.midtrans_token;
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Invalid",
          text: error.response.data.message,
        });
      }
    },
  },
});
