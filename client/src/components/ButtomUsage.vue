<template>
    <button
        class="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        {{ nameButton }}
    </button>
</template>
<script>
export default {
    props: ["nameButton"]
}
</script>