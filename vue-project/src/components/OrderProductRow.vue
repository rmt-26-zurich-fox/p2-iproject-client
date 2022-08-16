<script>
export default {
  props: ["order", "index"],
  computed: {
    getPriceFormatted() {
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
    getLastUpdateDateFormatted() {
      const d = new Date(this.order.updatedAt);
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
    <td>{{ index + 1 }}</td>
    <td>
      <img :src="order.Product.imageUrl" style="width: 80px; height: 100px" />
    </td>
    <td>{{ order.Product.name }}</td>
    <td>{{ order.orderStatus }}</td>
    <td>{{ order.stock }}</td>
    <td>{{ getPriceFormatted }}</td>
    <td>{{ getOrderDateFormatted }}</td>
    <td>{{ getLastUpdateDateFormatted }}</td>
  </tr>
</template>
