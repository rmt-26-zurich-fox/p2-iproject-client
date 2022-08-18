<script>
import { mapActions, mapState } from 'pinia'
import { useProductStore } from '@/stores/productStore'
import { useBrandStore } from '@/stores/brandStore'
import { RouterLink } from 'vue-router'

export default {
    data() {
        return {
            dataProduct: {
                nameProduct: '',
                imageProduct: '',
                price: '',
                weight: '',
                skinCategory: '0',
                productCategory: '0',
                BrandId: '0',
                description: ''
            },
            previewImage: ''
        }
    },
    watch: {
        "$route.fullPath"(value) {
            if (value === "/products/create") {
                this.dataProduct = {
                    nameProduct: '',
                    imageProduct: '',
                    price: '',
                    weight: '',
                    skinCategory: '0',
                    productCategory: '0',
                    BrandId: '0',
                    description: ''
                }

                this.previewImage = ''
            }
        }
    },
    computed: {
        ...mapState(useProductStore, ["productById"]),
        ...mapState(useBrandStore, ["brands"])
    },
    methods: {
        ...mapActions(useProductStore, ["addProduct", "updateProduct"]),
        ...mapActions(useBrandStore, ["readAllBrand"]),
        upload(event) {
            this.dataProduct.imageProduct = event.target.files[0]
            this.previewImage = URL.createObjectURL(event.target.files[0])
        },
        postProduct() {
            if (this.productById.nameProduct) {
                this.updateProduct(this.productById.id, this.dataProduct)
            } else {
                this.addProduct(this.dataProduct)
            }
        }
    },
    created() {
        this.readAllBrand()
        if (this.productById.nameProduct) {
            this.dataProduct.nameProduct = this.productById.nameProduct
            this.dataProduct.imageProduct = this.productById.imageProduct
            this.dataProduct.price = this.productById.price
            this.dataProduct.weight = this.productById.weight
            this.dataProduct.skinCategory = this.productById.skinCategory
            this.dataProduct.productCategory = this.productById.productCategory
            this.dataProduct.BrandId = this.productById.BrandId
            this.dataProduct.description = this.productById.description
            this.previewImage = this.productById.imageProduct
        }
    }
}
</script>
<template>
    <div id="content" class="overflow-auto">
        <div class="card shadow-sm" style="border-radius: 10px; background-color: white;">
            <div class="card-body p-5">
                <h3 class="mb-4">Create Product</h3>
                <p>Create Product</p>
                <form @submit.prevent="postProduct" autocomplete="off" class="mt-4" enctype="multipart/form-data">
                    <div class="form-group mb-3">
                        <label for="nameProduct">Name Product</label>
                        <input type="text" id="nameProduct" v-model="dataProduct.nameProduct" class="form-control mt-2">
                    </div>
                    <div class="form-group mb-3">
                        <label for="imageProduct">Image Product</label>
                        <div v-if="previewImage" class="mt-3 mb-3">
                            <img :src="previewImage" style="height: 150px">
                        </div>
                        <input type="file" id="imageProduct" @change="upload" class="form-control mt-2">
                        <small v-if="productById.imageProduct">leave it blank if you don't want to change the
                            image</small>
                    </div>
                    <div class="form-group mb-3">
                        <label for="price">Price</label>
                        <input type="number" id="price" v-model="dataProduct.price" class="form-control mt-2">
                    </div>
                    <div class="form-group mb-3">
                        <label for="weight">Weight</label>
                        <input type="number" id="weight" v-model="dataProduct.weight" class="form-control mt-2">
                    </div>
                    <div class="form-group mb-3">
                        <label for="skinCategory">Skin Category</label>
                        <select id="skinCategory" v-model="dataProduct.skinCategory" class="form-control mt-2">
                            <option value="0">--- Select One ---</option>
                            <option value="All Skin">All Skin</option>
                            <option value="Oily Skin">Oily Skin</option>
                            <option value="Dry Skin">Dry Skin</option>
                            <option value="Combination skin">Combination Skin</option>
                            <option value="Acne Skin">Acne Skin</option>
                        </select>
                    </div>
                    <div class="form-group mb-3">
                        <label for="productCategory">Product Category</label>
                        <select id="productCategory" v-model="dataProduct.productCategory" class="form-control mt-2">
                            <option value="0">--- Select One ---</option>
                            <option value="Cleaner">Cleaner</option>
                            <option value="Moisturizer">Moisturizer</option>
                            <option value="Toner">Toner</option>
                            <option value="Sunscreen">Sunscreen</option>
                            <option value="Serum">Serum</option>
                            <option value="Face Mask">Face Mask</option>
                        </select>
                    </div>
                    <div class="form-group mb-3">
                        <label for="BrandId">Brand Product</label>
                        <select id="BrandId" v-model="dataProduct.BrandId" class="form-control mt-2">
                            <option value="0">--- Select One ---</option>
                            <option v-for="(brand, idx) in brands" :key="idx" :value="brand.id">{{ brand.nameBrand }}
                            </option>
                        </select>
                    </div>
                    <div class="form-group mb-3">
                        <label for="description">Description</label>
                        <textarea id="description" v-model="dataProduct.description" class="form-control mt-2" cols="30"
                            rows="5"></textarea>
                    </div>

                    <div class="form-group mt-4">
                        <RouterLink to="/products" class="btn btn-outline-primary float-start">Cancel</RouterLink>
                        <button type="submit" class="btn btn-primary float-end">Add Product</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>