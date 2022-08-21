<script>
	import { mapActions, mapWritableState } from "pinia";
	import { dashboard } from "../../stores/dashboard";
	import SyndicateList from "./reusable/SyndicateList.vue";
	export default {
		components: { SyndicateList },
		data() {
			return {
				icon: {
					ostron: "https://raw.githubusercontent.com/WFCD/genesis-assets/1131d527894088ea8141a5a859cd85e569ea8b40/svg/ostron.svg",
					solaris:
						"https://raw.githubusercontent.com/WFCD/genesis-assets/1131d527894088ea8141a5a859cd85e569ea8b40/svg/solaris.svg",
					entrati:
						"https://raw.githubusercontent.com/WFCD/genesis-assets/1131d527894088ea8141a5a859cd85e569ea8b40/svg/entrati.svg",
				},
				useIcon: null,
			};
		},
		computed: {
			...mapWritableState(dashboard, ["dataBounty"]),
			categoryChecker() {
				if (this.dataBounty.inCategory === "cetus") return this.icon.ostron;
				if (this.dataBounty.inCategory === "solaris") return this.icon.solaris;
				if (this.dataBounty.inCategory === "entrati") return this.icon.entrati;
			},
		},
		methods: {
			...mapActions(dashboard, ["fetchSyndicate"]),
			changeCategory(category) {
				this.dataBounty.inCategory = category;
			},
		},
		async created() {
			await this.fetchSyndicate();
		},
	};
</script>
<template>
	<table class="w-100">
		<thead>
			<tr>
				<th colspan="3" class="text-center">Bounty</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td colspan="3" class="text-center fw-bold text-capitalize">
					<img :src="categoryChecker" class="icon" />{{ dataBounty.inCategory }}
				</td>
			</tr>
			<tr style="border: 1px solid black">
				<td class="text-center">Mission</td>
				<td class="text-center">Bounty</td>
				<td class="text-end pe-3">Level</td>
			</tr>
			<SyndicateList
				style="border: 1px solid black"
				v-if="this.dataBounty.inCategory === 'cetus' && this.dataBounty.cetus"
				v-for="(bounty, index) of this.dataBounty.cetus.jobs"
				:key="index"
				:data="bounty"
			/>
			<SyndicateList
				style="border: 1px solid black"
				v-if="this.dataBounty.inCategory === 'entrati' && this.dataBounty.entrati"
				v-for="(bounty, index) of this.dataBounty.entrati.jobs"
				:key="index"
				:data="bounty"
			/>
			<SyndicateList
				style="border: 1px solid black"
				v-if="this.dataBounty.inCategory === 'solaris' && this.dataBounty.solaris"
				v-for="(bounty, index) of this.dataBounty.solaris.jobs"
				:key="index"
				:data="bounty"
			/>

			<tr>
				<td colspan="3">
					<div class="d-flex justify-content-center">
						<button class="button-custom" @click="changeCategory('cetus')">Cetus</button>
						<button class="button-custom" @click="changeCategory('entrati')">Entrati</button>
						<button class="button-custom" @click="changeCategory('solaris')">Solaris</button>
					</div>
				</td>
			</tr>
		</tbody>
	</table>
</template>
