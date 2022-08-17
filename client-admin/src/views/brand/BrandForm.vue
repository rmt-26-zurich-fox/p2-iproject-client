<script>
import { mapActions, mapState } from 'pinia'
import { useBrandStore } from '../../stores/brandStore'
import { RouterLink } from 'vue-router'

export default {
    data() {
        return {
            dataBrand: {
                nameBrand: '',
                logoBrand: ''
            },
            previewImage: ''
        }
    },
    computed: {
        ...mapState(useBrandStore, ["brandById", "isPage"])
    },
    methods: {
        ...mapActions(useBrandStore, ["addBrand", "updateBrand"]),
        upload(event) {
            this.dataBrand.logoBrand = event.target.files[0]
            this.previewImage = URL.createObjectURL(event.target.files[0])
        },
        postBrand() {
            if (this.brandById.nameBrand) {
                this.updateBrand(this.brandById.id, this.dataBrand)
            } else {
                this.addBrand(this.dataBrand)
            }
        }
    },
    created() {
        if (this.brandById.nameBrand) {
            this.dataBrand.nameBrand = this.brandById.nameBrand
            this.dataBrand.logoBrand = this.brandById.logoBrand
            this.previewImage = this.brandById.logoBrand
        }
    }
}
</script>
<template>
    <div id="content" class="overflow-auto">
        <div class="card shadow-sm" style="border-radius: 10px; background-color: white;">
            <div class="card-body p-5">
                <h3 class="mb-4">Create Brand</h3>
                <p>Create Brand</p>
                <form @submit.prevent="postBrand" autocomplete="off" class="mt-4" enctype="multipart/form-data">
                    <div class="form-group mb-3">
                        <label for="nameBrand">Name Brand</label>
                        <input type="text" id="nameBrand" v-model="dataBrand.nameBrand" class="form-control mt-2">
                    </div>
                    <div class="form-group mb-3">
                        <label for="logoBrand">Logo Brand</label>
                        <div v-if="previewImage" class="mt-3 mb-3">
                            <img :src="previewImage" style="height: 150px">
                        </div>
                        <input type="file" id="logoBrand" @change="upload" class="form-control mt-2">
                        <small v-if="brandById.logoBrand">leave it blank if you don't want to change the image</small>
                    </div>

                    <div class="form-group mt-4">
                        <RouterLink to="/brands" class="btn btn-outline-primary float-start">Cancel</RouterLink>
                        <button type="submit" class="btn btn-primary float-end">Add Brand</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>