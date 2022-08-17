<script>
	import { mapActions, mapState } from "pinia";
	import { dashboard } from "../../stores/dashboard";
	import NewsList from "./reusable/NewsList.vue";

	export default {
		components: { NewsList },
		methods: {
			...mapActions(dashboard, ["fetchNews"]),
		},
		computed: {
			...mapState(dashboard, ["primaryData"]),
			// test() {
			// 	return this.primaryData.news[0].translations.;
			// },
		},
		async created() {
			await this.fetchNews();
		},
	};
</script>
<template>
	<!-- {{ primaryData.news[0] }} -->
	<div class="mt-1 mb-5">
		<table>
			<thead>
				<th colspan="2" class="text-center">NEWS</th>
			</thead>
			<tbody class="border border-dark">
				<NewsList v-for="(news, index) of primaryData.news" :key="index" :news="news" />
			</tbody>
		</table>
	</div>
</template>
