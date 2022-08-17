<script>
export default {
    props: ["category"]
}
</script>

<template>
    <button v-on:click="filterCategories(category.id)" class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700  hover:bg-gray-100">
       {{ category.name }}
    </button>
</template>