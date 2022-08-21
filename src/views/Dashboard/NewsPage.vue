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
	<table>
		<thead>
			<tr>
				<th colspan="2" class="text-center">NEWS</th>
			</tr>
		</thead>
		<tbody class="">
			<NewsList v-for="(news, index) of primaryData.news" :key="index" :news="news" />
		</tbody>
	</table>
</template>
