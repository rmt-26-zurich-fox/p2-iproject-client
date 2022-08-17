<script>
import { mapWritableState, mapActions } from 'pinia'
import { useCustomStore } from '../stores/custom'

export default {
    methods: {
        ...mapActions(useCustomStore, ['fetchDetail', 'addToCart']),
        addCart(id) {
            this.addToCart(id)
        }
    },
    computed: {
        ...mapWritableState(useCustomStore, ['details'])
    },
    created() {
        this.fetchDetail(this.$route.params.id)
    }
}
</script>


<template>
<h3 class="text-center">Item Detail</h3>
<div class="block" v-if="details.item">
      <div class="block__body">
        <h3 class="block__heading">
          {{details.item.name}} by {{details.item.Supplier.name}}
        </h3>
        <p class="block__copy">{{details.item.description}}</p>
        <p class="block__copy">In Stock: {{details.item.stock}}</p>
        <p class="block__copy">Rp. {{details.item.sellPrice}}</p>
        <br>
        <button @click="addCart(details.item.id)" class="btn btn-primary">Add to Cart</button>
      </div>
      <div class="block__img">
        <img
          :src="details.item.imageUrl"
        />
      </div>
    </div>
</template>

<style scoped>
* {
        font-family: sans-serif;
        margin: 0;
        padding: 0;
      }

      .block {
        border: 1px solid grey;
        margin: 10px;
        height: 70vh;

        display: flex;
        justify-content: space-between;
        align-items: center;
        overflow: hidden;
      }

      .block__body {
        padding: 15px;
        text-align: center;
        vertical-align: baseline;
      }

      .block__img img {
        width: 40vw;
        /*height: 30vh;*/
        height: 100%;
      }
</style>