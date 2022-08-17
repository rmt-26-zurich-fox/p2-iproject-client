<template>
  <thead class="table-food">
    <tr>
      <th v-for="el in changeTable">{{ el }}</th>
      <th class="action" v-if="role === 'Customer'">Payment</th>
    </tr>
  </thead>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      role: localStorage.getItem("role"),
    };
  },
  computed: {
    changeTable() {
      return [
        "Order Id",
        "Paket",
        "Order Date",
        "Deadline Date",
        "Weight",
        "Total Price",
        "Status",
      ];
    },
  },
};
</script>
<style>
.action {
  width: 130px;
}
</style>
