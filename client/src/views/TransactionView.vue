<script>
import { mapActions, mapState } from "pinia";
import { useAllStore } from "../stores/useAllStore";

export default {
  components: {},

  computed: {
    ...mapState(useAllStore, ["transactions", "totalAmount"]),
  },

  methods: {
    ...mapActions(useAllStore, ["fetchTransaction", "formatRupiah", "payment"]),

    async fetchTransactionLocal() {
      await this.fetchTransaction();
    },

    handlePaymentLocal() {
      this.payment();
    },
  },

  created() {
    this.fetchTransactionLocal();
    this.fetchTransaction();
  },
};
</script>

<template>
  <div class="row py-5 p-4 bg-white rounded shadow-sm">
    <div class="col-lg-6"></div>
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
        <a
          @click.prevent="handlePaymentLocal"
          href="#"
          class="btn btn-dark rounded-pill py-2 btn-block"
          >Proceed to payment</a
        >
      </div>
    </div>
  </div>
</template>
