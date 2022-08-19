<script>
import { mapActions, mapState } from "pinia";
import { useAllStore } from "../stores/useAllStore";
import CartCard from "../components/CartCard.vue";

export default {
  components: {
    CartCard,
  },

  computed: {
    ...mapState(useAllStore, ["carts", "transactions"]),
  },

  methods: {
    ...mapActions(useAllStore, ["fetchCart", "checkOut", "fetchTransaction"]),

    async fetchCartLocal() {
      try {
        await this.fetchCart();
      } catch (error) {
        console.log(error);
      }
    },

    async fetchTransactionLocal() {
      try {
        await this.fetchTransaction();
      } catch (error) {
        console.log(error);
      }
    },

    async checkOutLocal() {
      try {
        await this.checkOut();
        this.$router.push('/transaction')
      } catch (error) {
        console.log(error);
      }
    },
  },

  created() {
    this.fetchCartLocal();
    // this.fetchCart();
  },
};
</script>

<template>
  <div>
    <div
      class="row py-5 p-4 bg-white rounded shadow-sm d-flex justify-content-center"
    >
      <!-- For demo purpose -->

      <div
        class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold"
      >
        Carts
      </div>
      <!-- End -->

      <div class="pb-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
              <!-- Shopping cart table -->
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col" class="border-0 bg-light">
                        <div class="p-2 px-3 text-uppercase">Product</div>
                      </th>
                      <th scope="col" class="border-0 bg-light">
                        <div class="py-2 text-uppercase">Price</div>
                      </th>
                      <th scope="col" class="border-0 bg-light">
                        <div class="py-2 text-uppercase">Quantity</div>
                      </th>
                      <th scope="col" class="border-0 bg-light">
                        <div class="py-2 text-uppercase">Remove</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <CartCard
                      v-for="cart in carts"
                      :key="cart.id"
                      :cart="cart"
                    />
                  </tbody>
                </table>
              </div>
              <!-- End -->

              <a
                href="#"
                @click.prevent="checkOutLocal"
                class="btn btn-dark rounded-pill py-2 btn-block"
              >
                Procceed to checkout</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
