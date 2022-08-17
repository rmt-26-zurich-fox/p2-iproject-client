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
		<td style="padding-inline: 10px">{{ data.node }}</td>
		<td style="padding-inline: 10px" class="text-center">{{ data.missionKey }}</td>
		<td style="padding-inline: 10px" class="text-center">{{ data.tier }}</td>
		<td style="padding-inline: 10px" class="fw-bold">{{ countdown }}</td>
	</tr>
</template>
