<script>
import { mapActions } from 'pinia';
import { useCustomStore } from '../stores/custom';

export default {
    props: ['cart'],
    methods: {
        ...mapActions(useCustomStore, ['deleteFromCart']),
        onClickDeleteFromCart(id) {
            this.deleteFromCart(id)
        }
    }
}

</script>

<template>
<div class="col-md-4 ">
          <div class="card">
            <img :src="cart.Item.imageUrl" class="card-img-top" height="380"/>
            <div class="card-body">
              <h5 class="card-title">{{cart.Item.name}} ({{cart.quantity}})</h5>
              <p class="card-text">{{cart.Item.description}}</p>
              <p class="card-text">Rp .{{cart.Item.sellPrice}}</p>
              <div class="btn-group">
              <button @click="deleteFromCart(cart.Item.id)" class="btn btn-primary">Delete from cart</button>
            </div>
            </div>
          </div>
        </div>
</template>