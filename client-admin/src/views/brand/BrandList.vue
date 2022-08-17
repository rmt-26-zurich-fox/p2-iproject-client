<script>
import Table from '@/components/Table.vue'

export default {
    components: {
        Table
    }
}
</script>
<template>
    <div id="content" class="overflow-auto">
        <div class="card shadow-sm" style="border-radius: 10px; background-color: white;">
            <div class="card-body p-5">
                <h3 class="mb-4">Brand List</h3>
                <p>Brand List</p>

                <Table />
            </div>
        </div>
    </div>
</template>