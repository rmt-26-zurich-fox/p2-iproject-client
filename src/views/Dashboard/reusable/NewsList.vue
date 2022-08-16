<script>
	import moment from "moment";
	export default {
		props: ["news"],
		methods: {
			timeSince(date) {
				let dateTime = new Date(date);
				let timestamp = dateTime.getTime();

				var seconds = Math.floor((new Date() - timestamp) / 1000);

				var interval = seconds / 31536000;

				if (interval > 1) {
					return Math.floor(interval) + "y";
				}
				interval = seconds / 2592000;
				if (interval > 1) {
					return Math.floor(interval) + "m";
				}
				interval = seconds / 86400;
				if (interval > 1) {
					return Math.floor(interval) + "d";
				}
				interval = seconds / 3600;
				if (interval > 1) {
					return Math.floor(interval) + "h";
				}
				interval = seconds / 60;
				if (interval > 1) {
					return Math.floor(interval) + "min";
				}
				return Math.floor(seconds) + "sec";
			},
		},
		computed: {},
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
