<script>
import { useCounterStore } from "../stores/counter";
import { mapState, mapActions } from "pinia";
import DataReviews from "../components/DataReviews.vue";
import PaginationNum from "../components/PaginationNum.vue";
import LoadingComponent from "../components/LoadingComponent.vue";

export default {
    methods: {
        ...mapActions(useCounterStore, ["fetchDataReview"])
    },
    computed: {
        ...mapState(useCounterStore, ["reviews", "totalPage", "dataFound", "isLoading", "role"])
    },
    components: {
        DataReviews,
        PaginationNum,
        LoadingComponent

    },
    async created() {
        await this.fetchDataReview();
    }
}

</script>

<template>
    <!-- Loading -->
    <LoadingComponent v-if="isLoading" />

    <div class="flex justify-center mt-10">
        <PaginationNum v-for="(page, idx) in totalPage" :key="idx" :page="page" />
    </div>
    <h2 v-if="!dataFound" class="font-bold mt-10 text-center ... ">Data Not Found</h2>
    <!-- Data Reviews -->
    <DataReviews v-else v-for="review in reviews" :key="review.id" :review="review" :role="role" />
</template>