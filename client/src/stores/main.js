import { defineStore } from "pinia";
import axios from "axios";
import ServerAxios from "../apis/serverAxios";
import Swal from "sweetalert2";

export const useMain = defineStore({
  id: "main",
  state: () => ({
    isLoggedIn: false,
    profileFound: false,
    userProfile: {},
    teams: [],
    oneTeam: {},
    players: [],
    favTeams: [],
  }),
  actions: {
    async login(user) {
      try {
        const response = await ServerAxios.post("/users/login", {
          email: user.email,
          password: user.password,
        });
        const { access_token } = response.data;
        localStorage.setItem("access_token", access_token);
        this.findProfile();
        await Swal.fire({
          title: "Success!",
          icon: "success",
          text: "Logged in succesfully",
          timer: 1500,
        });
        this.isLoggedIn = true;
        this.router.push({ name: "HomePage" });
      } catch (error) {
        Swal.fire({
          title: "Error!",
          icon: "error",
          text: error.response.data.message,
          timer: 1500,
        });
      }
    },
    logout() {
      localStorage.clear();
      this.isLoggedIn = false;
      this.router.push({ name: "LoginPage" });
    },
    refreshPage() {
      if (localStorage.getItem("access_token")) {
        this.isLoggedIn = true;
      }
    },
    async register(user) {
      try {
        const response = await ServerAxios.post("/users/register", {
          email: user.email,
          password: user.password,
          role: "Visitor",
        });
        const { message } = response.data;
        await Swal.fire({
          title: "Success!",
          icon: "success",
          text: message,
          timer: 1500,
        });
        this.router.push({ name: "LoginPage" });
      } catch (error) {
        Swal.fire({
          title: "Error!",
          icon: "error",
          text: error.response.data.message,
          timer: 1500,
        });
      }
    },
    async findProfile() {
      try {
        const response = await ServerAxios.get("/profiles", {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        const { data } = response;
        if (data !== null) {
          this.profileFound = true;
        }
        this.userProfile = data;
      } catch (error) {
        Swal.fire({
          title: "Error!",
          icon: "error",
          text: error.response.data.message,
          timer: 1500,
        });
      }
    },
    async createProfile(user) {
      try {
        const response = await ServerAxios.post(
          "/profiles/create",
          {
            firstName: user.firstName,
            lastName: user.lastName,
            selfDescription: user.selfDescription,
            address: user.address,
            phoneNumber: user.phoneNumber,
            profilePicture: user.profilePicture,
            birthdate: user.birthdate,
          },
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
        this.router.push("/");
      } catch (error) {
        Swal.fire({
          title: "Error!",
          icon: "error",
          text: error.response.data.message,
          timer: 1500,
        });
      }
    },
    async editProfile(user) {
      try {
        const response = await ServerAxios.post(
          `/profiles/edit/${this.userProfile.id}`,
          {
            firstName: user.firstName,
            lastName: user.lastName,
            selfDescription: user.selfDescription,
            address: user.address,
            phoneNumber: user.phoneNumber,
            profilePicture: user.profilePicture,
            birthdate: user.birthdate,
          },
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
      } catch (error) {
        Swal.fire({
          title: "Error!",
          icon: "error",
          text: error.response.data.message,
          timer: 1500,
        });
      }
    },

    async fetchTeams() {
      try {
        const response = await ServerAxios.get(`/teams`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        const { data } = response;
        this.teams = data;
      } catch (error) {
        Swal.fire({
          title: "Error!",
          icon: "error",
          text: error.response.data.message,
          timer: 1500,
        });
      }
    },

    async fetchOneTeam(id) {
      try {
        const response = await ServerAxios.get(`/teams/${id}`, {
          headers: { access_token: localStorage.getItem("access_token") },
        });
        const { data } = response;
        this.oneTeam = data;
        this.getPlayersbyTeamId(id);
        this.router.push({
          name: "TeamDetail",
          params: {
            id: id,
          },
        });
      } catch (error) {
        Swal.fire({
          title: "Error!",
          icon: "error",
          text: error.response.data.message,
          timer: 1500,
        });
      }
    },

    async getPlayersbyTeamId(id) {
      try {
        const response = await ServerAxios.get(`/teams/${id}/players`, {
          headers: { access_token: localStorage.getItem("access_token") },
        });
        const { data } = response;
        this.players = data;
      } catch (error) {
        Swal.fire({
          title: "Error!",
          icon: "error",
          text: error.response.data.message,
          timer: 1500,
        });
      }
    },

    async getFavoriteTeams() {
      try {
        const response = await ServerAxios.get(
          `/teams/users/${this.userProfile.id}`,
          {
            headers: { access_token: localStorage.getItem("access_token") },
          }
        );
        const { data } = response;
        this.favTeams = data.map((el) => {
          return el.Team;
        });
      } catch (error) {
        Swal.fire({
          title: "Error!",
          icon: "error",
          text: error.response.data.message,
          timer: 1500,
        });
      }
    },

    async likeATeam(id) {
      try {
        const response = await ServerAxios.post(
          `/teams/${id}/like`,
          {},
          {
            headers: { access_token: localStorage.getItem("access_token") },
          }
        );
        this.getFavoriteTeams();
        this.router.push({
          name: "FavoritePage",
          params: {
            id: id,
          },
        });
      } catch (error) {
        Swal.fire({
          title: "Error!",
          icon: "error",
          text: error.response.data.message,
          timer: 1500,
        });
      }
    },
  },
});
