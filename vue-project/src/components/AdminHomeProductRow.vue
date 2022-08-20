<script>
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
};
</script>

<template>
  <tr>
    <th>{{ index + 1 }}</th>
    <th>{{ product.name }}</th>
    <th>{{ getPriceFormatted }}</th>
    <th>{{ product.weight }}</th>
    <th>
      <img :src="product.imageUrl" style="width: 80px; height: 100px" />
    </th>
    <th>{{ getCreatedDateFormatted }}</th>
    <th>{{ getLastUpdateDateFormatted }}</th>
    <th>
      <select v-model="product.productStatus">
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>
    </th>
    <th>
      <button class="btn btn-warning">Dummy Edit</button>
    </th>
  </tr>
</template>
