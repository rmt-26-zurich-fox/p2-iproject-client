<script>
import CartCard from '../components/CartCard.vue'
import { mapActions } from 'pinia'
import { mapWritableState } from 'pinia'
import { useCustomStore } from '../stores/custom'

export default {
    components: {
        CartCard
    },
    methods: {
        ...mapActions(useCustomStore, ['fetchCart'])
    },
    computed: {
        ...mapWritableState(useCustomStore, ['carts'])
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
        <h3 class="text-center" style="color: Black;">Your Cart</h3>
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
                    <td>Mark</td>
                    <td>Rp. 100000</td>
                    <td><button class="btn btn-primary"> print invoice</button></td>     
                  </tr>
                </tbody>
              </table>
        </div>
    </div>
</template>