<script>
	import { mapActions, mapState } from "pinia";
	import { dashboard } from "@/stores/dashboard";
	import InvasionsList from "./reusable/InvasionsList.vue";
	export default {
		components: { InvasionsList },
		data() {
			return {
				localPrimaryData: null,
			};
		},
		methods: {
			...mapActions(dashboard, ["fetchInvasions"]),
		},
		computed: {
			...mapState(dashboard, ["primaryData"]),
		},
		async created() {
			await this.fetchInvasions();
			this.localPrimaryData = this.primaryData.invasions;
		},
	};
</script>
<template>
	<table>
		<thead>
			<th colspan="3" class="text-center">Invasions</th>
		</thead>
		<tbody class="border border-dark">
			<tr style="border-bottom: 1px solid black">
				<td class="text-center" colspan="1">Location</td>
				<td class="text-center" colspan="2">Mission</td>
			</tr>
			<InvasionsList v-for="(invasion, index) of primaryData.invasions" :key="index" :invasion="invasion" />
		</tbody>
	</table>
</template>
