<script>
	import { mapActions } from "pinia";
	import { dashboard } from "../../../stores/dashboard";

	export default {
		props: ["data"],
		data() {
			return {
				countdown: "",
			};
		},
		methods: {
			...mapActions(dashboard, ["countingDown"]),
		},
		created() {
			setInterval(() => {
				const date = new Date().toISOString();
				this.countdown = this.countingDown(date, this.data.expiry);
			}, 1000);
		},
	};
</script>
<template>
	<tr style="border: 1px solid black">
		<td>{{ data.node }}</td>
		<td class="text-center padding-table">{{ data.missionKey }}</td>
		<td class="text-center padding-table">{{ data.tier }}</td>
		<td class="fw-bold">{{ countdown }}</td>
	</tr>
</template>
