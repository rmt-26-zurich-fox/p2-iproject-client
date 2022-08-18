<script>
	import { mapActions } from "pinia";
	import { dashboard } from "@/stores/dashboard.js";

	export default {
		props: ["news"],
		data() {
			return { currentTime: null };
		},
		methods: {
			...mapActions(dashboard, ["timeSince"]),
		},
		computed: {},
		created() {},
	};
</script>
<template>
	<tr>
		<td class="padding-table">{{ timeSince(news.date) }}</td>
		<td class="padding-table">
			<a :href="news.link" target="_blank" style="color: blue">{{ news.message }}</a>
		</td>
	</tr>
</template>
