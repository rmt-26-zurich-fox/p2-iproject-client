<template>
  <tr :priceRp="priceRp">
    <td>
      {{ el.id }}
    </td>
    <td>{{ el.Package.name }}</td>
    <td>{{ toDate(el.createdAt) }}</td>
    <td>{{ toDate(el.deadlineDate) }}</td>
    <td>{{ el.weight }} kg</td>
    <td>{{ formatedPrice }}</td>
    <td>
      <form v-if="role === 'Admin'">
        <select v-model="cek">
          <option value="Pending">Pending</option>
          <option value="On Progress">On Progress</option>
          <option value="Done">Done</option>
        </select>
      </form>
      <span v-else-if="role === 'Customer'">{{ el.status }}</span>
    </td>
    <td>
      <button
        v-if="role === 'Customer' && el.payment == 'Unpaid'"
        @click="payment"
        class="pay-button btn btn-success edit-button"
      >
        Pay!
      </button>
      <span v-else-if="el.payment == 'Paid' && role === 'Customer'">Paid</span>
    </td>
  </tr>
</template>
<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
import Swal from "sweetalert2";

export default {
  components: {},
  data() {
    return {
      role: localStorage.getItem("role"),
      formatedPrice: "",
      token: undefined,
      cek: this.el.status,
      paymentCek: this.el.payment,
    };
  },
  props: ["el"],
  watch: {
    cek(a, b) {
      this.updateStatusCloth({ id: this.el.id, status: a });
    },
  },
  computed: {
    ...mapState(useCounterStore, ["clothes", "midtransToken"]),

    priceRp() {
      this.formatedPrice = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(this.el.totalPrice);
    },
  },
  methods: {
    ...mapActions(useCounterStore, [
      "generateMidtransToken",
      "updateStatusCloth",
      "fetchDataCloth",
    ]),
    toDate(date) {
      return new Date(date).toLocaleDateString("en-ZA");
    },
    async payment() {
      this.token = await this.generateMidtransToken({
        UserId: this.el.UserId,
        totalPrice: this.el.totalPrice,
        id: this.el.id,
      });
      let getId = this.el.id;
      let changeStat = this.updateStatusCloth;
      let fetchCloth = this.fetchDataCloth;
      //51bc6458-016f-474a-964e-90f54cc8cd76
      window.snap.pay(this.token, {
        onSuccess: function (result) {
          /* You may add your own implementation here */
          changeStat({ id: getId, payment: "Paid" });
          Swal.fire({
            icon: "success",
            title: "payment success!",
            showConfirmButton: false,
            timer: 1500,
          });
          fetchCloth();
          console.log("payment success!");
          console.log(result);
        },
        onPending: function (result) {
          /* You may add your own implementation here */
          Swal.fire({
            icon: "error",
            title: "Invalid",
            text: "wating your payment!",
          });
        },
        onError: function (result) {
          /* You may add your own implementation here */
          Swal.fire({
            icon: "error",
            title: "Invalid",
            text: "payment failed!",
          });
        },
        onClose: function () {
          Swal.fire({
            icon: "error",
            title: "Invalid",
            text: "you closed the popup without finishing the payment",
          });
          /* You may add your own implementation here */
        },
      });
    },
  },
  async created() {},
};
</script>

<style></style>
