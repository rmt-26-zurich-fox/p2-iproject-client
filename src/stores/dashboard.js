import { defineStore } from "pinia";
import axios from "axios";
import { server } from "../assets/serverConfig";

export const dashboard = defineStore({
	id: "counter",
	state: () => ({
		primaryData: {},
		secondaryData: {},
		dealsData: {},
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
				const { data } = await axios(`${server.url}/events/${platform}/nightwave`);
				this.primaryData.news = data.response;
			} catch ({ response }) {
				console.log(response.data.message);
			}
		},
	},
});
