import { defineStore } from "pinia";
import axios from "axios";
//
export const patchnote = defineStore({
	id: "patchnote",
	state: () => ({
		baseUrl: "http://localhost:3000",
		//
		dataState: {},
		dataFetch: {},
		//
		counter: 0,
	}),
	getters: {
		doubleCount: state => state.counter * 2,
	},
	actions: {
		async fetchPatchnote() {
			try {
				const { data } = await axios(`${this.baseUrl}/patchlogs`);

				this.dataFetch.patchnote = data.response.filter((data, index) => {
					if (index >= 0 && index < 100) {
						return data;
					}
				});
			} catch ({ response }) {
				console.log(response.data.message);
			}
		},
	},
});
