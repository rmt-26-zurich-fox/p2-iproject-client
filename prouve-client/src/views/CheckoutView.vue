<template>
  <p class="text-center font-semibold text-3xl">CHECKOUT</p>
  <div class="flex justify-center mt-10">
    <div
      class="block p-6 w-full bg-white rounded-lg border border-gray-200 shadow-md h-fit"
    >
      <!-- <CART CARD> -->
      <CheckoutCard v-for="item in cart" :key="cart.id" :item="item" />
      <div class="pt-4 mt-4 space-y-2 border-t border-gray-200"></div>
      <div class="flex justify-end">
        <div class="w-1/4">
          <p class="text-lg font-semibold text-gray-800 mt-5 text-center">
            Total Price
          </p>
        </div>
        <div class="w-1/4 text-center">
          <p class="text-lg font-semibold text-gray-800 mt-5 pr-16">
            {{ priceIDR }}
          </p>
        </div>
      </div>
      <div class="flex justify-end mt-10">
        <div class="flex w-1/4 justify-end">
          <button
            @click="payment"
            class="flex items-center p-2 pl-3 text-base font-normal rounded-lg bg-green-300 mx-20"
          >
            <img
              class="inline-block w-6"
              src="https://img.icons8.com/cotton/64/000000/cash-register--v3.png"
            />
            <span class="font-semibold text-gray-800 text-xl ml-2 pr-2"
              >Payment</span
            >
          </button>
        </div>
        <div class="mr-0"></div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckoutCard from "../components/CheckoutCard.vue";
import { mapState } from "pinia";
import { mapActions } from "pinia";
import { productStore } from "../stores/product";

export default {
  components: { CheckoutCard },

  methods: {
    ...mapActions(productStore, [
      "fetchCart",
      "fetchPayment",
      "removeCheckout",
    ]),
    payment() {
      this.fetchPayment().then(() => {
        window.snap.pay(this.paymentToken, {
          onSuccess: () => {
            this.removeCheckout().then(() => {
              this.$router.push({ name: "shop" });
            });
          },
        });
      });
    },
  },

  computed: {
    ...mapState(productStore, ["cart", "paymentToken"]),

    totalPrice() {
      let total = 0;
      this.cart.forEach((el) => {
        total += el.price;
      });
      return total;
    },

    priceIDR() {
      let price = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(this.totalPrice);

      return price;
    },
  },

  beforeMount() {
    this.fetchCart();
  },
};
</script>

<style>
.container3 {
  height: 120px;
  width: 120px;
  position: relative;
}

.vertical-center3 {
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>
