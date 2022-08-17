<script>
	import { mapActions, mapState } from "pinia";
	import { dashboard } from "../../stores/dashboard";
	import NightwaveList from "./reusable/NightwaveList.vue";

	export default {
		components: { NightwaveList },
		data() {
			return {
				testVar: null,
			};
		},
		methods: {
			...mapActions(dashboard, ["fetchNightwave"]),
		},
		computed: {
			...mapState(dashboard, ["primaryData"]),
		},
		async created() {
			await this.fetchNightwave();
			this.testVar = this.primaryData.nightwave.activeChallenges;
		},
	};
</script>

<template>
	<div class="mt-1 mb-5">
		<table>
			<thead>
				<th colspan="3" class="text-center">Nightwave</th>
			</thead>
			<tbody class="border border-dark">
				<tr style="border-bottom: 1px solid black">
					<td class="text-center">mission</td>
					<td class="text-center">reward</td>
					<td class="text-center">timer</td>
				</tr>
				<NightwaveList v-for="(nightwave, index) of testVar" :key="index" :nightwave="nightwave" />
			</tbody>
		</table>
	</div>
</template>
