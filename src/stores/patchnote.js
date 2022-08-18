import { defineStore } from "pinia";
import axios from "axios";
import { server } from "../assets/serverConfig";
//
export const patchnote = defineStore({
	id: "patchnote",
	state: () => ({
		//
		dataState: {},
		dataFetch: {},
	}),
	getters: {},
	actions: {
		async fetchPatchnote() {
			try {
				const { data } = await axios(`${server.url}/patchlogs`);

				// this.dataFetch.patchnote = data.response.filter((data, index) => {
				// 	if (index >= 0 && index < 100) {
				// 		return data;
				// 	}
				// });
				this.dataFetch.patchnote = data.response;
				console.log(this.dataFetch.patchnote, "ini dari fetchPatchNote()");
			} catch ({ response }) {
				console.log(response.data.message);
			}
		},
	},
});
