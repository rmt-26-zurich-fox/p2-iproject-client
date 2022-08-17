<script>
	import { mapActions, mapState } from "pinia";
	import { dashboard } from "@/stores/dashboard";
	import FissuresList from "./reusable/FissuresList.vue";

	export default {
		data() {
			return {};
		},
		methods: {
			...mapActions(dashboard, ["fetchFissures"]),
		},
		computed: {
			...mapState(dashboard, ["primaryData"]),
		},
		async created() {
			await this.fetchFissures();
			// this.normalFissure = this.primaryData.fissures.normal;
			// console.log(this.localPrimaryData.normal);
			// const { normal, storm } = this.primaryData.fissures;
			// this.localPrimaryData = { normal, storm };
		},
		components: { FissuresList },
	};
</script>
<template>
	<table>
		<thead>
			<th colspan="4" class="text-center fw-bold">Fissures</th>
		</thead>
		<tbody>
			<tr style="border: 1px solid black">
				<td class="text-center">Location</td>
				<td class="text-center">Mission</td>
				<td class="text-center">Relic Tier</td>
				<td class="text-center">duration</td>
			</tr>
			<FissuresList
				v-if="primaryData.fissures.isDefaultState"
				v-for="(dataNormal, index) of primaryData.fissures.normal"
				:key="index"
				:data="dataNormal"
			/>
			<tr>
				<td colspan="4" class="d-flex justify-content-center align-items-center"><button>BUTTON PAGINATION</button></td>
			</tr>
		</tbody>
	</table>
</template>
