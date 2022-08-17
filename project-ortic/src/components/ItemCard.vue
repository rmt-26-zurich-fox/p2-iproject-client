<script>
import { mapActions } from 'pinia'
import { useCustomStore } from '../stores/custom'

export default {
    props: ['item']
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
              <a href="#!" class="btn btn-primary">Add to Cart</a>
              <router-link to="/detail" class="btn btn-primary">Details</router-link>
              <!-- <a href="#!" class="btn btn-primary">Delete</a> -->
            </div>
            </div>
          </div>
          </div>

</template>