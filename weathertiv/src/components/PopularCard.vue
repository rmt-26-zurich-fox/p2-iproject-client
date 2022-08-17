<template>
    <!-- single place -->
    <div class="col-md-3 col-sm-6">
        <div id="product-1" class="single-product">
            <div class="part-1">
                <a @click="clickPopular(locationProp.id)"><img :src="locationProp.imgUrl"
                        class="product-image rounded"></a>
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
import { mapActions } from "pinia";
import { customStore } from '../stores/store';

export default {
    props: ['locationProp'],
    methods: {
        ...mapActions(customStore, ["fetchPopularLocationWeather"]),

        //Click popular
        async clickPopular(popularId) {
            this.$router.push({ name: "popularDetail", params: { popularId: popularId } });
        },
    },
}
</script>