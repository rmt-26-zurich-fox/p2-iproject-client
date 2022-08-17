<script>
	import { mapActions, mapState } from "pinia";
	import { dashboard } from "@/stores/dashboard.js";
	export default {
		props: ["nightwave"],
		data() {
			return {
				countdown: "",
			};
		},
		methods: {
			...mapActions(dashboard, ["countingDown"]),
		},
		computed: {
			...mapState(dashboard, ["nowDate"]),
		},
		created() {
			setInterval(() => {
				const date = new Date().toISOString();
				this.countdown = this.countingDown(date, this.nightwave.expiry);
			}, 1000);
		},
	};
</script>
<template>
	<tr style="border-bottom: 1px solid black">
		<td style="padding-inline: 10px">{{ nightwave.title }}</td>
		<td style="padding-inline: 10px">
			{{ nightwave.reputation }}
		</td>
		<td class="fw-bold border border-dark pe-2 ps-2">{{ countdown }}</td>
	</tr>
	<tr style="border-bottom: 1px solid black">
		<td colspan="3" class="text-center">{{ nightwave.desc }}</td>
	</tr>
</template>
