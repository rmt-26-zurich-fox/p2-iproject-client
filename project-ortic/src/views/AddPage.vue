<script>
import { mapActions, mapWritableState } from 'pinia';
import { useCustomStore } from '../stores/custom'

export default {
    data() {
        return {
            name: '',
            description: '',
            buyPrice: 0,
            sellPrice: 0,
            stock: 0,
            imageUrl: '',
            SupplierId: 0
        }
    },
    methods: {
        ...mapActions(useCustomStore, ['addItem']),
        add() {
            this.addItem({
                name: this.name,
                description: this.description,
                buyPrice: this.buyPrice,
                sellPrice: this.sellPrice,
                stock: this.stock,
                imageUrl: this.imageUrl,
                SupplierId: this.SupplierId
            })
        }
    }
}
</script>

<template>
<div class="py-5">
    <div class="container" style="border: black;">
  <form @submit.prevent="add()">
    <h3 class="text-center">Add Form</h3>
    <!-- Name input -->
    <div class="form-outline-dark mb-4">
      <label class="form-label" for="form4Example1">Name</label>
      <input type="text" class="form-control" v-model="name"/>
    </div>
  
    <!-- Email input -->
    <div class="form-outline-dark mb-4">
      <label class="form-label" for="form4Example2">Description</label>
      <textarea class="form-control" id="form4Example3" rows="4" v-model="description"></textarea>
    </div>
  
    <!-- Message input -->
    <div class="form-outline-dark mb-4">
      <label class="form-label" for="form4Example3">Buy Price</label>
      <input id="form4Example2" class="form-control" v-model="buyPrice"/>
    </div>

    <!-- Message input -->
    <div class="form-outline-dark mb-4">
      <label class="form-label" for="form4Example3">Sell Price</label>
      <input id="form4Example2" class="form-control" v-model="sellPrice"/>
      </div>

    <!-- Message input -->
    <div class="form-outline-dark mb-4">
      <label class="form-label" for="form4Example3">Stock</label>
      <input id="form4Example2" class="form-control" v-model="stock"/>
      </div>

    <!-- Message input -->
    <div class="form-outline-dark mb-4">
      <label class="form-label" for="form4Example3">Image Url</label>
      <input id="form4Example2" class="form-control" v-model="imageUrl"/>
      </div>

    <!-- Message input -->
    <div class="form-outline-dark mb-4">
      <label class="form-label" for="form4Example3">Supplier</label>
      <select class="form-control" id="form4Example3" rows="4" v-model="SupplierId">
        <option value="1">Sinar Dental Supply</option>
        <option value="2">Oyodental</option>
        <option value="3">Dentspro</option>
        <option value="4">HappyDental69</option>
        <option value="5">3sdentply</option>
        <option value="6">Dwidental</option>
        <option value="7">Rudang</option>
        <option value="8">H&H Gloves</option>
        <option value="9">Kaizen</option>
        <option value="10">Aldent</option>
      </select>
      </div>

    <!-- Submit button -->
    <button type="submit" class="btn btn-dark btn-block mb-4">Add</button>
  </form>
  </div>
</div>
</template>