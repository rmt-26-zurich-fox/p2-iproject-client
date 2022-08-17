<script>
export default {
    props: ["trow"],
    computed: {
        columnNames() {
            const { fullPath } = this.$route
            if (fullPath === '/brands') {
                return ["nameBrand", "logoBrand"]
            }
        }
    }
}
</script>
<template>
    <tr>
        <td>#</td>
        <td v-for="(td, idx) in columnNames" :key="idx">
            <p v-if="'logoBrand' === td">
                <img :src="trow.logoBrand" :alt="trow.nameBrand" style="width: 150px">
            </p>
            <p v-else>
                {{ trow[td] }}
            </p>
        </td>
    </tr>
</template>