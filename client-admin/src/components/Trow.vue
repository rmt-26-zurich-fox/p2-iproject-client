<script>
import { mapState, mapActions } from 'pinia'
import { useBrandStore } from '../stores/brandStore'
import { RouterLink } from 'vue-router'

export default {
    props: ["trow"],
    computed: {
        ...mapState(useBrandStore, ["actionBrand"]),
        columnNames() {
            const { fullPath } = this.$route
            if (fullPath === '/brands') {
                return ["nameBrand", "logoBrand"]
            }
        },
        actionData() {
            const { fullPath } = this.$route
            if (fullPath === "/brands") {
                return this.actionBrand
            }
        }
    },
    methods: {
        ...mapActions(useBrandStore, ["editBrand"]),
        handleEdit() {
            const { fullPath } = this.$route

            if (fullPath === "/brands") {
                this.editBrand(this.trow.id)
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
        <td v-if="actionData.length > 0">
            <span v-if="actionData.includes('show')">
                <button type="button" class="btn btn-outline-info btn-sm"><i class="fa-solid fa-eye"></i></button>
            </span>
            <span v-if="actionData.includes('edit')" class="m-2">
                <a @click.prevent="handleEdit" class="btn btn-outline-primary btn-sm"><i class="fas fa-edit"></i></a>
            </span>
            <span v-if="actionData.includes('delete')">
                <button type="button" class="btn btn-outline-danger btn-sm"><i class="fa fa-trash"
                        aria-hidden="true"></i>
                </button>
            </span>
        </td>
    </tr>
</template>