<template>
  <div class="flex justify-center mt-20" v-if="!cart.length">
    <p class="text-2xl">Your Cart is Empty</p>
  </div>
  <div v-if="cart.length">
    <p class="text-center font-semibold text-3xl mt-10">CHECKOUT</p>
    <div class="flex justify-start">
      <div class="flex justify-center mt-10 w-2/3">
        <div
          class="block p-6 bg-white rounded-lg border border-gray-200 shadow-md h-fit w-full mx-20 px-20"
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
              <p class="text-lg font-semibold text-gray-800 mt-5 pr-8">
                {{ priceIDR }}
              </p>
            </div>
          </div>
          <div class="flex justify-end mt-10">
            <div class="flex w-1/4 justify-end mr-16">
              <button
                @click="payment"
                class="flex items-center p-2 pl-3 text-base font-normal rounded-lg bg-green-300"
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
      <div class="flex justify-start mt-10 w-1/3">
        <div class="block p-6 bg-white h-fit mr-10">
          <p class="text-gray-800 text-base font-semibold">
            Terms & Conditions
          </p>
          <p class="text-gray-800 text-sm font-medium">
            The terms and conditions set forth below govern the use of services
            offered using the site. Users are advised to read carefully and
            agree to the terms and conditions that have been set.
          </p>
          <p class="text-gray-800 text-base font-semibold mt-5">Payments</p>
          <ul class="list-disc text-gray-800 font-medium text-sm">
            <li>
              All payments must be 100% completed in order to process your
              order.
            </li>
            <li>
              There are no refunds or cancellations after the payment is made.
              (For any issues or complaints, please kindly reach us to the below
              contact details)
            </li>
          </ul>
          <p class="text-gray-800 text-base font-semibold mt-5">Pick Up</p>
          <ul class="list-disc text-gray-800 font-medium text-sm">
            <li>
              All cakes must be ordered 2 business days before the requested
              date.
            </li>
            <li>
              All orders made outside of operating hours will be processed on
              the next working day.
            </li>
            <li>Pick ups can be taken at Jl. Binamarga I No.22 Bogor Timur.</li>
          </ul>
          <p class="text-gray-800 text-base font-semibold mt-5">
            Online Shop Operational Hours
          </p>
          <p class="text-gray-800 text-sm font-medium">
            Monday to Friday | 8:00am to 8:00pm
          </p>
          <p class="text-gray-800 text-sm font-medium">
            Saturday & Sunday | 10:00am to 6:00pm
          </p>
          <p class="text-gray-800 text-base font-semibold mt-5">
            Contact Online Shop
          </p>
          <p class="text-gray-800 text-sm font-medium">
            081398830218 (Whatsapp only chat)
          </p>
        </div>
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
