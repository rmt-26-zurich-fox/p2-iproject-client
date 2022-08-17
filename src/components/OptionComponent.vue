<script>
export default {
    props: ["category"]
}
</script>

<template>
    <option :value="category.id"
        class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 text-center"
        >{{ category.name }}
    </option>
</template>