<script>
	import { mapActions, mapState } from "pinia";
	import { dashboard } from "@/stores/dashboard";
	import SortieList from "./reusable/SortieList.vue";
	export default {
		components: { SortieList },
		data() {
			return {
				localPrimaryData: null,
			};
		},
		methods: {
			...mapActions(dashboard, ["fetchSortie"]),
		},
		computed: { ...mapState(dashboard, ["primaryData"]) },
		async created() {
			await this.fetchSortie();
			this.localPrimaryData = this.primaryData.sortie.variants;
		},
	};
</script>
<template>
	<div class="mt-1 mb-5">
		<table>
			<thead>
				<th colspan="3" class="text-center">Sortie</th>
			</thead>
			<tbody class="border border-dark">
				<tr style="border-bottom: 1px solid black">
					<td class="text-center">Type</td>
					<td class="text-center">Modifier</td>
					<td class="text-center">Node</td>
				</tr>
				<SortieList v-for="(sortie, index) of localPrimaryData" :key="index" :sortie="sortie" />
			</tbody>
		</table>
	</div>
</template>
