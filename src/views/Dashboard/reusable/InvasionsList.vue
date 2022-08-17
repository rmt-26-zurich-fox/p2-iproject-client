<script>
	import { mapActions } from "pinia";
	import { dashboard } from "../../../stores/dashboard";

	export default {
		props: ["invasion"],
		data() {
			return {
				countdown: "",
			};
		},
		methods: {
			...mapActions(dashboard, ["countingDown"]),
		},
		computed: {
			progressAttacker() {
				const faction = this.invasion.attackingFaction;
				if (faction === "Corpus") {
					return `width:${this.invasion.completion}%;background-color:darkblue;`;
				} else if (faction === "Grineer") {
					return `width:${this.invasion.completion}%;background-color:#B58B00;`;
				} else if (faction === "Infested") {
					return `width:${this.invasion.completion}%;background-color:darkgreen;`;
				}
			},
			progressDefender() {
				const faction = this.invasion.defendingFaction;
				if (faction === "Corpus") {
					return `height:30px;width:100%;background-color:darkblue;`;
				} else if (faction === "Grineer") {
					return `height:30px;width:100%;background-color:#B58B00;`;
				} else if (faction === "Infested") {
					return `height:30px;width:100%;background-color:darkgreen;`;
				}
			},
			completion() {
				let data = this.invasion.completion;
				data = data.toString().split(".");
				data[1] = data[1].slice(0, 2);
				data = data.join(".") + "%";
				return data;
			},
			tooltipDefend() {
				const defend = this.invasion.attackerReward.countedItems[0] ? this.invasion.defenderReward.countedItems[0].key : null;
				if (defend) {
					const title = `${this.invasion.defenderReward.countedItems[0].key}`;
					return title;
				} else {
					return "";
				}
			},
			tooltipAttack() {
				const attack = this.invasion.attackerReward.countedItems[0] ? this.invasion.attackerReward.countedItems[0].key : null;
				if (attack) {
					const title = `${this.invasion.attackerReward.countedItems[0].key}`;
					return title;
				} else {
					return "";
				}
			},
		},
		created() {
			setInterval(() => {
				const date = new Date().toISOString();
				this.countdown = this.countingDown(this.invasion.activation, date);
			}, 1000);
		},
	};
</script>

<template>
	<tr style="border-bottom: 1px solid black">
		<td style="padding-inline: 10px">{{ invasion.node }}</td>
		<!-- ATTACKER FIRST -->
		<td class="fw-bold border border-dark pe-2 ps-2" style="padding-inline: 10px">{{ invasion.desc }}</td>
	</tr>
	<tr>
		<td style="border: 1px solid" colspan="3">
			<div class="position-relative">
				<div class="float-start">
					<img
						:src="this.invasion.attackerReward.thumbnail"
						data-mdb-toggle="tooltip"
						data-mdb-html="true"
						:title="tooltipAttack"
						style="height: 30px"
					/>
				</div>
				<div class="float-end">
					<img
						:src="this.invasion.defenderReward.thumbnail"
						data-mdb-toggle="tooltip"
						data-mdb-html="true"
						:title="tooltipDefend"
						style="height: 30px"
					/>
				</div>
				<b class="d-flex justify-content-center pt-1">{{ countdown }}</b>
			</div>
		</td>
	</tr>
	<tr style="border-bottom: 1px solid black">
		<td colspan="3" class="text-center">
			<div class="position-relative">
				<div>
					<p class="position-absolute top-50 start-50 translate-middle text-light">
						{{ invasion.attackingFaction }}&nbsp;|&nbsp;{{ completion }}&nbsp;|&nbsp;{{ invasion.defendingFaction }}
					</p>
					<div class="progress" :style="this.progressDefender">
						<div role="progressbar" :style="this.progressAttacker">
							<span class="text-center"></span>
						</div>
					</div>
				</div>
			</div>
		</td>
	</tr>
</template>
