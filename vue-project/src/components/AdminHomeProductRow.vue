<script>
import { mapActions } from "pinia";
import { useCustomStore } from "../stores/custom";

export default {
  props: ["product", "index"],
  computed: {
    getPriceFormatted() {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(this.product.price);
    },
    getCreatedDateFormatted() {
      const d = new Date(this.product.createdAt);
      const day = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      return `${day[d.getDay()]}, ${d.getDate()} ${
        month[d.getMonth()]
      } ${d.getFullYear()}`;
    },
    getLastUpdateDateFormatted() {
      const d = new Date(this.product.updatedAt);
      const day = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      return `${day[d.getDay()]}, ${d.getDate()} ${
        month[d.getMonth()]
      } ${d.getFullYear()}`;
    },
  },
  methods: {
    ...mapActions(useCustomStore, ["onChangeProductStatus"]),
    onChangeProductStatusHandler(event, productId) {
      this.onChangeProductStatus(event.target.value, productId);
    },
    onClickButtonEditHandler(productId) {
      this.$router.push(`/edit-item/${productId}`);
    },
  },
};
</script>

<template>
  <tr>
    <td>{{ index + 1 }}</td>
    <td>{{ product.name }}</td>
    <td>{{ getPriceFormatted }}</td>
    <td>{{ product.stock }}</td>
    <td>{{ product.weight }} gram</td>
    <td>
      <img :src="product.imageUrl" style="width: 80px; height: 100px" />
    </td>
    <td>{{ getCreatedDateFormatted }}</td>
    <td>{{ getLastUpdateDateFormatted }}</td>
    <td>
      <select
        v-model="product.productStatus"
        @change="onChangeProductStatusHandler($event, +product.id)"
        class="form-control text-center"
      >
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>
    </td>
    <td>
      <button
        class="btn btn-warning"
        @click="onClickButtonEditHandler(product.id)"
      >
        Edit
      </button>
    </td>
  </tr>
</template>

<style scoped>
td {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
