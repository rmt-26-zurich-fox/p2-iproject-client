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
		<td style="padding-inline: 10px">{{ timeSince(news.date) }}</td>
		<td style="padding-inline: 10px">
			<a :href="news.link" target="_blank">{{ news.message }}</a>
		</td>
	</tr>
</template>
