<template>
    <!-- single place -->
    <div class="col-md-3 col-sm-6">
        <div id="product-1" class="single-product">
            <div class="part-1">
                <img :src="locationProp.imgUrl" class="product-image rounded">
            </div>
            <hr class="my-4">
            <div class="live-camera">
                <h3 class="location">{{ locationProp.name }}</h3>
                <small class="date">{{ locationProp.country }}</small>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: ['locationProp'],
}
</script>