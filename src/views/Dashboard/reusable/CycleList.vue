<script>
	import { mapActions, mapState } from "pinia";
	import { dashboard } from "@/stores/dashboard";

	export default {
		props: ["time"],
		data() {
			return {
				isWhat: null,
				countdown: null,
				loginReset: null,
			};
		},
		computed: {
			...mapState(dashboard, ["dataCycles"]),
			typeCheck() {
				let checker = this.time.id.slice(0, 3);
				if (checker === "cet") this.isWhat = { name: this.time.id.slice(0, 5), checker: this.time.isDay };
				if (checker === "val") this.isWhat = { name: "Orb " + this.time.id.slice(0, 6), checker: this.time.isWarm };
				if (checker === "cam") this.isWhat = { name: this.time.id.slice(0, 7) + " Drift", checker: this.time.active };
				if (checker === "zar") this.isWhat = { name: this.time.id.slice(0, 7), checker: this.time.isCorpus };
			},
		},
		methods: {
			...mapActions(dashboard, ["timeSince", "countingDown"]),
		},
		created() {
			setInterval(() => {
				const date = new Date().toISOString();
				this.countdown = this.countingDown(date, this.time.expiry);
			}, 1000);
		},
	};
</script>
<template>
	{{ typeCheck }}

	<div class="col-2">
		<div class="row">
			<div class="col text-capitalize fw-bold">{{ this.isWhat.name }}</div>
		</div>
		<div class="row">
			<div class="col">
				<span class="text-capitalize fw-bold">{{ time.state || time.active }}</span> end in {{ countdown }}
			</div>
		</div>
		<!-- <div class="row"><div class="col">isDay(as icon)</div></div> -->
	</div>
</template>
