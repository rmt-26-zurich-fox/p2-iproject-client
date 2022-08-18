<script>
	import { mapActions, mapState } from "pinia";
	import { dashboard } from "../../stores/dashboard";
	import CycleList from "./reusable/CycleList.vue";

	export default {
		data() {
			return {
				countdown: null,
			};
		},
		computed: {
			...mapState(dashboard, ["dataCycles", "dailyReset"]),
		},
		methods: {
			...mapActions(dashboard, ["fetchCycles", "countingDown"]),
		},
		async created() {
			this.fetchCycles();
			setInterval(() => {
				const date = new Date().toISOString();
				this.countdown = this.countingDown(this.dailyReset, date);
			}, 1000);
		},
		components: { CycleList },
	};
</script>
<template>
	<div class="container mb-3">
		<div class="row background-white rounded-6" style="background-color: rgba(253, 253, 253, 0.7)">
			<CycleList v-for="(time, index) of this.dataCycles" :key="index" :time="time" />
			<div class="col-4">
				<div class="row">
					<div class="col">Time until reset<br />Sortie/Syndicate : {{ countdown }}</div>
				</div>
			</div>
		</div>
	</div>
</template>
