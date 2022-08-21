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
	<table class="">
		<thead>
			<tr>
				<th colspan="3" class="text-center fw-bold">Nightwave</th>
			</tr>
		</thead>
		<tbody class="border">
			<tr>
				<td class="text-center">Mission</td>
				<td class="text-center">Reward</td>
				<td class="text-center">Timer</td>
			</tr>
			<NightwaveList v-for="(nightwave, index) of testVar" :key="index" :nightwave="nightwave" />
		</tbody>
	</table>
</template>
