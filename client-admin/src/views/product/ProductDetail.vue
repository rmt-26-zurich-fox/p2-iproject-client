<script>
import { mapState } from 'pinia'
import { useProductStore } from '@/stores/productStore'
import { RouterLink } from 'vue-router'

export default {
    computed: {
        ...mapState(useProductStore, ["productById"])
    }
}
</script>
<template>
    <div id="content" class="overflow-auto">
        <div class="card shadow-sm" style="border-radius: 10px; background-color: white;">
            <div class="card-body p-5">
                <h3 class="mb-4">Product Detail</h3>
                <p>Product Detail</p>

                <div class="row mt-5">
                    <div class="col">
                        <a :href="productById.imageProduct" target="_blank">
                            <img :src="productById.imageProduct" :alt="productById.nameProduct" style="height: 100px"
                                class="mb-5" />
                        </a>
                        <br>
                        <small>click image to view</small>
                    </div>
                    <div class="col">
                        <div>
                            <h6><b>Product Name</b></h6>
                            <p>{{ productById.nameProduct }}</p>
                        </div>
                        <div>
                            <h6><b>Public ID Image Product</b></h6>
                            <p v-if="productById.publicIdImage">{{ productById.publicIdImage }}</p>
                            <p v-else>Not available</p>
                        </div>
                        <div>
                            <h6><b>URL Image Product</b></h6>
                            <a :href="productById.imageProduct" target="_blank">{{ productById.imageProduct }}</a>
                        </div>
                    </div>
                </div>

                <RouterLink to="/products" class="btn btn-outline-primary float-start btn-sm mt-5">Back</RouterLink>

            </div>
        </div>
    </div>
</template>