<script>
import { mapActions } from 'pinia'
import { useCustomStore } from '../stores/custom'

export default {
    props: ['item'],
    methods: {
        onClickDetail(id) {
            this.$router.push(`/detail/${id}`)
        },
        ...mapActions(useCustomStore, ['addToCart']),
        addCart(id) {
            this.addToCart(id)
        }
    }
}

</script>

<template>
        <div class="col-md-4 ">
          <div class="card">
            <img :src="item.imageUrl" width="380" height="380"/>
            <div class="card-body">
              <h5 class="card-title">{{item.name}}</h5>
              <p class="card-text">{{item.description}}</p>
              <p class="card-text">{{item.sellPrice}}</p>
              <div class="btn-group">
              <!-- <a href="#!" class="btn btn-primary">Update</a> -->
              <button @click="addCart(item.id)" class="btn btn-primary">Add to Cart</button>
              <button @click="onClickDetail(item.id)" class="btn btn-primary" >Details</button>
              <!-- <a href="#!" class="btn btn-primary">Delete</a> -->
            </div>
            </div>
          </div>
          </div>

</template>