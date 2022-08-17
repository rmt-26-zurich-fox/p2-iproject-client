import axios from "axios";
import { defineStore } from "pinia";
import Swal from "sweetalert2";
import housesInstance from "../apis/house";

export const useHouseStore = defineStore({
  id: "house",
  state: () => ({}),
  actions: {
    errorHandler(error) {
      const response = error.response;
      const errorMsg = response.data.message;
      let message;

      if (Array.isArray(errorMsg)) {
        message = errorMsg.join(", ");
      } else {
        message = errorMsg;
      }
      Swal.fire({
        icon: "error",
        title: `${response.status}: ${response.statusText}`,
        text: message,
      });
    },

    getAllHouses() {
      return new Promise((resolve, reject) => {
        housesInstance
          .get("houses")
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    getDetailHouse(houseId) {
      return new Promise((resolve, reject) => {
        housesInstance
          .get(`houses/details/${houseId}`)
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    getAllCategories() {
      return new Promise((resolve, reject) => {
        housesInstance
          .get("houses/categories")
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    getAllFacilities() {
      return new Promise((resolve, reject) => {
        housesInstance
          .get("houses/facilities")
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    hostingSubmission(newHouse) {
      return new Promise((resolve, reject) => {
        axios({
          method: "post",
          url: 'http://localhost:3000/houses',
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: {
            name: newHouse.name,
            location: newHouse.location,
            price: newHouse.price,
            CategoryId: newHouse.CategoryId,
            FacilityId: newHouse.FacilityId,
          }
        })
        .then(() => {
          resolve()
        })
        .catch(err => {
          reject(err)
        })
      })
    },
  },
});
