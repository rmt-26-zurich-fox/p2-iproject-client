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
      await this.fetchCart();
    },

    async fetchTransactionLocal() {
      await this.fetchTransaction();
    },
  },

  created() {
    this.fetchCartLocal();
    this.fetchCart();
  },
};
</script>

<template>
  <div>
    <div class="px-4 px-lg-0">
      <!-- For demo purpose -->
      <div class="container py-5 text-center">
        <h1 class="display-4">shopping cart</h1>
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

              <router-link to="/transaction"
                href="#"
                @click.prevent="checkOut"
                class="btn btn-dark rounded-pill py-2 btn-block"
              >
                Procceed to checkout</router-link
              >
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>
