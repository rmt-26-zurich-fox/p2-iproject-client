<script>
import { mapState, mapActions } from "pinia";
import { useCustomStore } from "../stores/custom";
import Swal from "sweetalert2";
import CartProductRow from "../components/CartProductRow.vue";

export default {
  data() {
    return {
      isPayed: false,
    };
  },
  components: {
    CartProductRow,
  },
  props: ["carts"],
  methods: {
    ...mapActions(useCustomStore, ["changeCartToPayed"]),
  },
  computed: {
    ...mapState(useCustomStore, ["midtransToken"]),
    formattedTotalCostProduct() {
      let allProductCost = 0;
      for (let x = 0; x < this.carts.length; x++) {
        allProductCost += this.carts[x].totalCost;
      }
      this.totalCostNeedToPay = allProductCost;
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(allProductCost);
    },
  },
  mounted() {
    var token = this.midtransToken;
    var callback = this.changeCartToPayed;

    var payButton = document.getElementById("pay-button");
    payButton.addEventListener("click", function () {
      // Trigger snap popup. @TODO: Replace TRANSACTION_TOKEN_HERE with your transaction token
      window.snap.pay(`${token}`, {
        onSuccess: function (result) {
          /* You may add your own implementation here */
          Swal.fire("Success", "payment success!", "success");
          callback();
          console.log(result);
        },
        onPending: function (result) {
          /* You may add your own implementation here */
          Swal.fire("Waiting", "wating your payment!", "info");
          console.log(result);
        },
        onError: function (result) {
          /* You may add your own implementation here */
          Swal.fire("Failed", "payment failed!", "error");
          console.log(result);
        },
        onClose: function () {
          /* You may add your own implementation here */
          Swal.fire(
            "Failed",
            "you closed the popup without finishing the payment",
            "warning"
          );
        },
      });
    });
  },
};
</script>

<template>
  <table class="table table-striped table-md table-bordered border-dark">
    <thead class="table-secondary">
      <tr>
        <th>No</th>
        <th>Image</th>
        <th>Product Name</th>
        <th>Stock</th>
        <th>Weight (gram)</th>
        <th>Total Cost</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="carts.length === 0">
        <td colspan="7">There is no items</td>
      </tr>
      <!-- Comp Row Here -->
      <CartProductRow
        v-for="(cart, index) in carts"
        :key="cart.id"
        :cart="cart"
        :index="index"
      />
      <tr v-if="carts.length !== 0">
        <td colspan="5">Total item in cart cost :</td>
        <td colspan="2">{{ formattedTotalCostProduct }}</td>
      </tr>
    </tbody>
  </table>
  <button class="btn btn-success" id="pay-button">Buy All Item in Cart</button>
</template>

<style scoped>
th {
  font-family: monospace;
}
td {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
</style>
