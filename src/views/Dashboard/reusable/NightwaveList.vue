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
	<tr>
		<td class="padding-table fw-bold">{{ nightwave.title }}</td>
		<td class="padding-table">
			{{ nightwave.reputation }}
		</td>
		<td class="fw-bold padding-table text-end">{{ countdown }}</td>
	</tr>
	<tr style="border-bottom: 1px solid black">
		<td colspan="3" class="text-center">{{ nightwave.desc }}</td>
	</tr>
</template>
