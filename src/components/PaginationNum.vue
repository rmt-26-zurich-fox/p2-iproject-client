<script>
export default {
    props: ["page"]
}
</script>

<template>
    <button
        class="items-center hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-gray-200 rounded-md sm:flex  hover:bg-blue-600  hover:text-white dark:hover:text-gray-200">
        {{ page }}
    </button>
</template>