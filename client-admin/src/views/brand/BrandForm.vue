<script>
import { mapActions } from 'pinia'
import { useBrandStore } from '../../stores/brandStore'

export default {
    data() {
        return {
            newBrand: {
                nameBrand: '',
                logoBrand: ''
            },
            previewImage: ''
        }
    },
    methods: {
        ...mapActions(useBrandStore, ["addBrand"]),
        upload(event) {
            this.newBrand.logoBrand = event.target.files[0]
            this.previewImage = URL.createObjectURL(event.target.files[0])
        },
        postBrand() {
            this.addBrand(this.newBrand)
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
                        <input type="text" id="nameBrand" v-model="newBrand.nameBrand" class="form-control mt-2">
                    </div>
                    <div class="form-group mb-3">
                        <label for="logoBrand">Logo Brand</label>
                        <div v-if="previewImage" class="mt-3 mb-3">
                            <img :src="previewImage" style="height: 150px">
                        </div>
                        <input type="file" id="logoBrand" @change="upload" class="form-control mt-2">
                    </div>

                    <div class="form-group mt-4">
                        <a href="" id="btn-cancel-add-movie" class="btn btn-outline-primary float-start">Cancel</a>
                        <button type="submit" class="btn btn-primary float-end">Add Brand</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>