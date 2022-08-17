import { defineStore } from "pinia";
import axios from "axios";
import { server } from "../assets/serverConfig";
import { parseISO, intervalToDuration } from "date-fns";
export const dashboard = defineStore({
	id: "dashboard",
	state: () => ({
		primaryData: {
			news: null,
			nightwave: null,
			sortie: null,
		},
		secondaryData: {},
		dealsData: {},
		nowDate: new Date(),
	}),
	getters: {},
	actions: {
		async fetchNews(platform = "pc") {
			try {
				const { data } = await axios(`${server.url}/events/${platform}/news`);

				this.primaryData.news = data.response;
			} catch ({ response }) {
				console.log(response.data.message);
			}
		},

		async fetchNightwave(platform = "pc") {
			try {
				const { data } = await axios({
					method: "get",
					url: `${server.url}/events/${platform}/nightwave`,
				});

				this.primaryData.nightwave = data.response;
			} catch ({ response }) {
				console.log(response.data.message);
			}
		},

		async fetchSortie(platform = "pc") {
			try {
				const { data } = await axios({
					method: "get",
					url: `${server.url}/events/${platform}/sortie`,
				});

				this.primaryData.sortie = data.response;
			} catch ({ response }) {
				console.log(response.data.message);
			}
		},

		//COMPLEMENT FUNCTION
		countingDown(startFrom, endTo) {
			//! INPUT TIME IS ISO TIMESTAMP
			let startDate = startFrom.toISOString(),
				endDate = endTo;

			let interval = intervalToDuration({ start: parseISO(startDate), end: parseISO(endDate) });
			let { years, months, days, hours, minutes, seconds } = interval;
			if (years > 0) days += 365 * years;
			if (months > 0) days += 31 * months;
			if (!days) {
				return `${hours}h ${minutes}m ${seconds}s`;
			} else {
				return `${days}d ${hours}h ${minutes}m ${seconds}s`;
			}
			//we want only days, hh:mm:ss
		},

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
});
