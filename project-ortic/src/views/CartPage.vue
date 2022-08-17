<script>
import CartCard from '../components/CartCard.vue'
import { mapActions } from 'pinia'
import { mapWritableState } from 'pinia'
import { useCustomStore } from '../stores/custom'

export default {
    data() {
        return {
            token: localStorage.token,
            username: localStorage.username,
            role: localStorage.role
        }
    },
    components: {
        CartCard
    },
    methods: {
        ...mapActions(useCustomStore, ['fetchCart']),
    },
    computed: {
        ...mapWritableState(useCustomStore, ['carts', 'cartDetails'])
    },
    created() {
        this.fetchCart()
    }
}

</script>

<template>
<div class="py-5">
    <div class="container">
        <div>
        <p class="text-center" style="margin-bottom: 15px; text-align: inherit">Your Cart</p>
        </div>
      <div class="row hidden-md-up">
        <CartCard v-for="cart in carts" :key="cart.id" :cart="cart"/>
      </div>
    </div>
  </div>

    <div class="py-5">
        <div class="container" style="border: 1px solid black; background-color:azure;">
            <h5>Order Form:</h5>
            <table class="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{{username}}</td>
                    <td>{{cartDetails.totalPrice}}</td>
                    <td><button class="btn btn-dark"> print invoice</button></td>     
                  </tr>
                </tbody>
              </table>
        </div>
    </div>
</template>