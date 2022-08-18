<template>
<LoadingSign v-if="isLoading"/>
  <div v-if="!isLoading" class="container pt-5">
    <h3 class="text-center mb-3">Open your door to hosting</h3>
    <form @submit.prevent="submitHosting">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input v-model="newHouse.name" type="text" class="form-control" id="name" placeholder="your house name" />
      </div>
      <div class="mb-3">
        <label for="location" class="form-label">Location</label>
        <input v-model="newHouse.location" type="text" class="form-control" id="location" placeholder="house location" />
      </div>
      <div class="mb-3">
        <label for="price" class="form-label">Price</label>
        <input v-model="newHouse.price" min="100000" type="number" class="form-control" id="price" placeholder="Minimum Rp.100.000" />
      </div>
      <div class="mb-3">
        <label for="image" class="form-label">Photos</label>
        <input @change="onchangePhoto" type="file" class="form-control" id="image" />
      </div>
      <div class="mb-3">
        <label for="category" class="form-label">Category</label>
        <select v-model="newHouse.CategoryId" class="form-select">
          <option value="" disabled>Please select one</option>
          <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="Facility" class="form-label">Facilities :</label>
        <div v-for="facility in facilities" :key="facility.id">
          <input type="checkbox" :value="facility.id" v-model="newHouse.FacilityId" />
          <label class="form-label ms-2">{{ facility.name }}</label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Host</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapWritableState } from "pinia";
import { useHouseStore } from "../stores/house";
import Swal from "sweetalert2";
import LoadingSign from "../components/LoadingSign.vue";

export default {
  components: {
    LoadingSign
},

  data() {
    return {
      categories: "",
      facilities: "",
      newHouse: {
        name: "",
        location: "",
        price: "",
        imageUrl: "",
        CategoryId: "",
        FacilityId: [],
      },
    };
  },

  methods: {
    ...mapActions(useHouseStore, ["getAllCategories", "getAllFacilities", "hostingSubmission", "errorHandler"]),

    async fetchCategories() {
      this.isLoading = true;
      try {
        const data = await this.getAllCategories();

        this.categories = data;
      } catch (error) {
        this.errorHandler(error);
      } finally {
        this.isLoading = false;
      }
    },

    async fetchFacilities() {
      this.isLoading = true;
      try {
        const data = await this.getAllFacilities();

        this.facilities = data;
      } catch (error) {
        this.errorHandler(error);
      } finally {
        this.isLoading = false;
      }
    },

    async submitHosting() {
      this.isLoading = true;
      try {
        const payload = {
          name: this.newHouse.name,
          location: this.newHouse.location,
          price: this.newHouse.price,
          CategoryId: this.newHouse.CategoryId,
          FacilityId: this.newHouse.FacilityId,
          imageUrl: this.newHouse.imageUrl,
        };

        await this.hostingSubmission(payload);
        this.$router.push("/");
        Swal.fire({
          title: "Your house successfully opened for hosting",
          icon: "success",
          position: "top-end",
          showConfirmButton: false,
          timer: 1000,
        });
      } catch (error) {
        this.errorHandler(error);
      } finally {
        this.isLoading = false;
      }
    },

    async onchangePhoto(event) {
      this.newHouse.imageUrl = event.target.files[0];
    },
  },

  computed: {
    ...mapWritableState(useHouseStore, ["isLoading"]),
  },

  created() {
    this.fetchCategories();
    this.fetchFacilities();
  },
};
</script>
