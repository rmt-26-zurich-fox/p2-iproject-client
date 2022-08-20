<script>
import { mapActions } from "pinia";
import { useCustomStore } from "../stores/custom";

export default {
  props: ["order", "index"],
  computed: {
    getTotalCostFormatted() {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(this.order.totalCost);
    },
    getOrderDateFormatted() {
      const d = new Date(this.order.createdAt);
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
    ...mapActions(useCustomStore, ["onChangeOrderStatus"]),
    onChangeOrderStatusHandler(event, orderId) {
      this.onChangeOrderStatus(event.target.value, orderId);
    },
  },
};
</script>

<template>
  <tr>
    <td>{{ index + 1 }}</td>
    <td>
      <select
        v-model="order.orderStatus"
        @change="onChangeOrderStatusHandler($event, +order.id)"
        class="form-control"
      >
        <option value="Payed">Payed</option>
        <option value="Done">Done</option>
      </select>
    </td>
    <td>{{ order.stock }}</td>
    <td>{{ getTotalCostFormatted }}</td>
    <td>{{ order.Profile.firstName }} {{ order.Profile.lastName }}</td>
    <td>{{ order.Profile.address }}</td>
    <td>{{ order.Product.name }}</td>
    <td>
      <img :src="order.Product.imageUrl" style="width: 80px; height: 100px" />
    </td>
    <td>{{ getOrderDateFormatted }}</td>
  </tr>
</template>

<style scoped>
td {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
