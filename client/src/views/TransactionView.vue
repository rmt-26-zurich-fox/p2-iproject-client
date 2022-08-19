<script>
import { mapActions, mapState } from "pinia";
import { useAllStore } from "../stores/useAllStore";

export default {
  components: {},

  computed: {
    ...mapState(useAllStore, [
      "transactions",
      "totalAmount",
      "transactionToken",
    ]),
  },

  methods: {
    ...mapActions(useAllStore, [
      "fetchTransaction",
      "formatRupiah",
      "paymentHandler",
    ]),

    async fetchTransactionLocal() {
      try {
        await this.fetchTransaction();
      } catch (error) {
        console.log(error);
      }
    },

    async paymentHandlerLocal() {
      try {
        const response = await this.paymentHandler(this.totalAmount);

        console.log(response, "=====ini responsee");
        console.log(this.transactionToken, "=====ini responsee");
        window.snap.pay(this.transactionToken);
        this.totalAmount = 0;
      } catch (error) {
        console.log(error);
      }
    },
  },

  created() {
    this.fetchTransactionLocal();
  },
};
</script>

<template>
  <div
    class="row py-5 p-4 bg-white rounded shadow-sm d-flex justify-content-center"
  >
    <div class="col-lg-6">
      <div
        class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold"
      >
        Order summary
      </div>
      <div class="p-4">
        <ul class="list-unstyled mb-4">
          <li class="d-flex justify-content-between py-3 border-bottom">
            <strong class="text-muted">Total</strong>
            <h5 class="font-weight-bold">
              {{ this.formatRupiah(totalAmount) }}
            </h5>
          </li>
        </ul>

        <button
          @click.prevent="paymentHandlerLocal"
          id="pay-button"
          class="btn btn-dark rounded-pill py-2 btn-block"
        >
          Pay!
        </button>
      </div>
    </div>
  </div>
</template>
