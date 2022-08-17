<script>
import { mapActions } from 'pinia'
import { useCustomStore } from '../stores/custom'

export default {
    data() {
        return {
            token: localStorage.token,
            username: localStorage.username,
            role: localStorage.role
        }
    },
    props: ['item'],
    methods: {
        onClickDetail(id) {
            this.$router.push(`/detail/${id}`)
        },
        ...mapActions(useCustomStore, ['addToCart', 'deleteItem']),
        addCart(id) {
            this.addToCart(id)
        },
        onClickUpdate(id) {
            this.$router.push(`/update/${id}`)
        },
        onClickDelete(id) {
            this.deleteItem(id)
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
              <button v-if="role==='admin'" @click="onClickUpdate(item.id)" class="btn btn-primary">Update</button>
              <button @click="addCart(item.id)" class="btn btn-primary">Add to Cart</button>
              <button @click="onClickDetail(item.id)" class="btn btn-primary" >Details</button>
              <button v-if="role==='admin'" @click="onClickDelete(item.id)" class="btn btn-primary">Delete</button>
            </div>
            </div>
          </div>
          </div>

</template>