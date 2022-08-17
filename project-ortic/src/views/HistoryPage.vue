<script>
import {mapWritableState, mapActions} from 'pinia'
import {useCustomStore} from '../stores/custom'
import HistoryCard from '../components/HistoryCard.vue'

export default {
    methods: {
        ...mapActions(useCustomStore, ["fetchHistory"])
    },
    computed: {
        ...mapWritableState(useCustomStore, ["histories"])
    },
    created() {
        this.fetchHistory();
    },
    components: { HistoryCard }
}

</script>

<template>
<div class="py-5">
    <div class="container" style="background-color: azure; border: black;">
        <table class="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Updated By</th>
                <th scope="col">Updated At</th>
              </tr>
            </thead>
            <HistoryCard v-for="history in histories" :key="history.id" :history="history"/>
          </table>
  </div>
</div>
</template>