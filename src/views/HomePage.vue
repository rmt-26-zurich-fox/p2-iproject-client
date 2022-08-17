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
        ...mapState(useCounterStore, ["reviews", "totalPage", "dataFound", "isLoading"])
    },
    components: {
        DataReviews,
        PaginationNum,
        LoadingComponent
    },
    async created() {
        let obj;
        if (this.$route.params) {
            obj = {
                page: this.$route.query.page,
                search: this.$route.query.search,
                categoryId: this.$route.query.categoryId
            }
        }
        await this.fetchDataReview(obj)
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
    <DataReviews v-else v-for="review in reviews" :key="review.id" :review="review" />
</template>