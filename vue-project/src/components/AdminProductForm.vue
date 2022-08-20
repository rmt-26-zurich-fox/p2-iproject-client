<template>
  <form>
    <div class="form-group row text-center mx-auto" style="width: 60%">
      <div class="mb-3">
        <label for="product-name" class="form-label">Name</label>
        <input
          v-model="name"
          type="text"
          id="product-name"
          class="form-control"
          placeholder="Example Cake"
        />
      </div>

      <div class="mb-3">
        <label for="product-price" class="form-label"> Price </label>
        <input
          v-model="price"
          type="number"
          id="product-price"
          class="form-control"
          placeholder="5000"
        />
      </div>

      <div class="mb-3">
        <label for="product-stock" class="form-label"> Stock </label>
        <input
          v-model="stock"
          type="number"
          id="product-stock"
          class="form-control"
          placeholder="10"
        />
      </div>

      <div class="mb-3">
        <label for="product-weight" class="form-label">Weight (gram)</label>
        <input
          v-model="weight"
          type="number"
          id="product-weight"
          class="form-control"
          placeholder="1200"
        />
      </div>

      <div class="mb-3">
        <label for="product-imgUrl" class="form-label"> Image URL </label>
        <input
          v-model="imageUrl"
          type="text"
          id="product-imgUrl"
          class="form-control"
          placeholder="URL"
        />
      </div>

      <button
        type="submit"
        class="btn btn-secondary"
        v-if="isState === 'Add'"
        @click.prevent="submitAddProductForm"
      >
        Add New Product
      </button>
      <button
        type="submit"
        class="btn btn-secondary"
        v-if="isState === 'Edit'"
        @click.prevent="submitEditProductForm"
      >
        Edit Product
      </button>
    </div>
  </form>
</template>

<script>
import { mapActions } from "pinia";
import { useCustomStore } from "../stores/custom";

export default {
  data() {
    return {
      editId: 0,
      name: "",
      price: "",
      stock: "",
      weight: "",
      imageUrl: "",
    };
  },
  props: ["isState", "populateProductForm"],
  methods: {
    ...mapActions(useCustomStore, ["adminAddNewProduct"]),

    submitAddProductForm() {
      this.adminAddNewProduct(
        this.name,
        this.price,
        this.stock,
        this.weight,
        this.imageUrl
      );
    },

    submitEditProductForm() {
      //   this.adminEditProduct(
      //     this.editId,
      //     this.name,
      //     this.price,
      //     this.stock,
      //     this.weight,
      //     this.imageUrl
      //   );
    },
  },
  created() {
    if (this.isState === "Edit") {
      //   this.editId = this.populateProductForm.id;
      //   this.name = this.populateProductForm.name;
      //   this.price = this.populateProductForm.price;
      //   this.stock = this.populateProductForm.stock;
      //   this.weight = this.populateProductForm.weight;
      //   this.imageUrl = this.populateProductForm.imageUrl;
    }
  },
};
</script>
