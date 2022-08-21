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
		computed: {
			relicIcon() {
				let { tierNum } = this.data;
				if (tierNum === 1)
					return "https://raw.githubusercontent.com/WFCD/genesis-assets/1131d527894088ea8141a5a859cd85e569ea8b40/svg/fissures/1.svg";
				if (tierNum === 2)
					return "https://raw.githubusercontent.com/WFCD/genesis-assets/1131d527894088ea8141a5a859cd85e569ea8b40/svg/fissures/2.svg";
				if (tierNum === 3)
					return "https://raw.githubusercontent.com/WFCD/genesis-assets/1131d527894088ea8141a5a859cd85e569ea8b40/svg/fissures/3.svg";
				if (tierNum === 4)
					return "https://raw.githubusercontent.com/WFCD/genesis-assets/1131d527894088ea8141a5a859cd85e569ea8b40/svg/fissures/4.svg";
				if (tierNum === 5)
					return "https://raw.githubusercontent.com/WFCD/genesis-assets/1131d527894088ea8141a5a859cd85e569ea8b40/svg/fissures/5.svg";
			},
		},
		created() {
			setInterval(() => {
				const date = new Date().toISOString();
				this.countdown = this.countingDown(date, this.data.expiry, "fissures");
			}, 1000);
		},
	};
</script>
<template>
	<tr style="border: 1px solid black">
		<td>{{ data.node }}</td>
		<td class="text-center padding-table">{{ data.missionKey }}</td>
		<td class="text-center padding-table"><img :src="relicIcon" class="icon-relic float-start" />&nbsp;{{ data.tier }}</td>
		<td class="fw-bold padding-table text-end">{{ countdown }}</td>
	</tr>
</template>
