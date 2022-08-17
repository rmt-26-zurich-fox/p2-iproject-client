<script>
	import { mapActions, mapWritableState } from "pinia";
	import { dashboard } from "@/stores/dashboard";
	import FissuresList from "./reusable/FissuresList.vue";

	export default {
		data() {
			return {};
		},
		methods: {
			...mapActions(dashboard, ["fetchFissures"]),
			toggleButton() {
				this.dataFissures.isDefaultState = !this.dataFissures.isDefaultState;
			},
		},
		computed: {
			...mapWritableState(dashboard, ["dataFissures"]),
		},
		async created() {
			await this.fetchFissures();
		},
		components: { FissuresList },
	};
</script>
<template>
	<table>
		<thead>
			<tr>
				<th colspan="4" class="text-center fw-bold">Fissures</th>
			</tr>
		</thead>
		<tbody>
			<tr style="border: 1px solid black">
				<td class="text-center">Location</td>
				<td class="text-center">Mission</td>
				<td class="text-center">Relic Tier</td>
				<td class="text-center">duration</td>
			</tr>
			<FissuresList
				v-if="dataFissures.isDefaultState"
				v-for="(dataNormal, index) of dataFissures.normal"
				:key="index"
				:data="dataNormal"
			/>
			<FissuresList
				v-if="!dataFissures.isDefaultState"
				v-for="(dataStorm, index) of dataFissures.storm"
				:key="index"
				:data="dataStorm"
			/>
			<tr>
				<td colspan="4" style="border: 1px solid black">
					<div class="d-flex justify-content-center align-items-center">
						<button class="btn btn-dark" @click.prevent="toggleButton">BUTTON PAGINATION</button>
					</div>
				</td>
			</tr>
		</tbody>
	</table>
</template>
