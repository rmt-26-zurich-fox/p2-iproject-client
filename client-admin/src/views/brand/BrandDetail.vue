<script>
import { mapState } from 'pinia'
import { useBrandStore } from '@/stores/brandStore'
import { RouterLink } from 'vue-router'

export default {
    computed: {
        ...mapState(useBrandStore, ["brandById"])
    }
}
</script>
<template>
    <div id="content" class="overflow-auto">
        <div class="card shadow-sm" style="border-radius: 10px; background-color: white;">
            <div class="card-body p-5">
                <h3 class="mb-4">Brand Detail</h3>
                <p>Brand Detail</p>

                <div class="row mt-5">
                    <div class="col">
                        <a :href="brandById.logoBrand" target="_blank">
                            <img :src="brandById.logoBrand" :alt="brandById.nameBrand" style="height: 100px"
                                class="mb-5" />
                        </a>
                        <br>
                        <small>click image to view</small>
                    </div>
                    <div class="col">
                        <div>
                            <h6><b>Brand Name</b></h6>
                            <p>{{ brandById.nameBrand }}</p>
                        </div>
                        <div>
                            <h6><b>Public ID Brand Logo</b></h6>
                            <p v-if="brandById.publicIdLogo">{{ brandById.publicIdLogo }}</p>
                            <p v-else>Not available</p>
                        </div>
                        <div>
                            <h6><b>URL Brand Logo</b></h6>
                            <a :href="brandById.logoBrand" target="_blank">{{ brandById.logoBrand }}</a>
                        </div>
                    </div>
                </div>

                <RouterLink to="/brands" class="btn btn-outline-primary float-start btn-sm mt-5">Back</RouterLink>

            </div>
        </div>
    </div>
</template>