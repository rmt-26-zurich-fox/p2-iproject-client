<script>
import { useCounterStore } from '../stores/counter';
import { mapActions, mapWritableState } from 'pinia';

export default {
    methods: {
        ...mapActions(useCounterStore, ["fetchDataReview"]),
        async filterCategories(id) {
            console.log(id)
            const obj = {
                categoryId: id
            }
            const response = await this.fetchDataReview(obj);
            if (response) {
                this.$router.push({ path: "/", query: {categoryId: id}});
            } else {
                this.dataFound = false;
                this.totalPage = 1;
                this.$router.push({ path: "/", query: {categoryId: id, totalPage: 1}});
            }
        }
    },
    computed: {
        ...mapWritableState(useCounterStore, ["dataFound", "totalPage"])
    },
    props: ["category"]
}
</script>

<template>
    <button @click="filterCategories(category.id)" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700  hover:bg-gray-200">
       {{ category.name }}
    </button>
</template>