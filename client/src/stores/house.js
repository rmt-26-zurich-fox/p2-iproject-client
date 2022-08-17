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

    getAllHouses(category) {
      return new Promise((resolve, reject) => {
        housesInstance
          .get("houses", {
            params: {
              category,
            },
          })
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
      const data = new FormData();
      data.append("name", newHouse.name);
      data.append("location", newHouse.location);
      data.append("price", newHouse.price);
      data.append("CategoryId", newHouse.CategoryId);
      data.append("FacilityId", newHouse.FacilityId);
      data.append("imageUrl", newHouse.imageUrl);

      return new Promise((resolve, reject) => {
        axios({
          method: "post",
          url: "http://localhost:3000/houses",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data,
        })
          .then(() => {
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    generateQr(houseId){
      return new Promise ((resolve, reject) => {
       axios({
        method: 'get',
        url: "https://api.happi.dev/v1/qrcode",
        params: {
          data: `http://localhost:8080/houses/${houseId}`
        },
        headers: {
          "x-happi-key": "ad594cn7OzVy8LBvI22lTeZdTQb0JGnUQRgONkPUmLR5yIzzeX3ZeaaV"
        }
       })
        .then(({data}) => {
          resolve(data)
        })
        .catch(err => {
          reject(err)
        })
      })
    }
  },
});
