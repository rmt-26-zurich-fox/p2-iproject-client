<script>
import { useCounterStore } from "../stores/counter";
import { mapState, mapActions } from "pinia";
import DataReviews from "../components/DataReviews.vue";
import PaginationNum from "../components/PaginationNum.vue";

export default {
    methods: {
        ...mapActions(useCounterStore, ["fetchDataReview"])
    },
    computed: {
        ...mapState(useCounterStore, ["reviews", "totalPage"])
    },
    components: {
    DataReviews,
    PaginationNum
},  
    async created() {
        await this.fetchDataReview()
    }
}

</script>

<template> 
    <div class="flex justify-center mt-10">
        <PaginationNum v-for="(page, idx) in totalPage" :key="idx" :page="page"/> 
    </div>
    <!-- Data Reviews -->
    <DataReviews v-for="review in reviews" :key="review.id" :review="review"/>
</template>