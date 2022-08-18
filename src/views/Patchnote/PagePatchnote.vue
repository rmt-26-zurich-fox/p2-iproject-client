<script>
	import { mapActions, mapState } from "pinia";
	import AccordionList from "./reusable/AccordionList.vue";
	import { patchnote } from "../../stores/patchnote";
	export default {
		components: { AccordionList },
		data() {
			return {
				isFirstOrLast: null,
			};
		},
		computed: {
			...mapState(patchnote, ["dataFetch"]),
		},
		methods: {
			...mapActions(patchnote, ["fetchPatchnote"]),
		},
		created() {
			console.log("test masuk page");
			this.fetchPatchnote();
			console.log(this.dataFetch, "ini dataFetch @PagePatchNote");
			console.log(this.isFirstOrLast, "ini isFirstOrLast @PagePatchNote");
		},
	};
</script>
<template>
	<div class="container"><p class="text-center h4 display-5 mb-4">Patchnote List</p></div>
	<div class="container">
		<div class="mb-5">
			<div v-if="dataFetch.patchnote" class="accordion accordion-flush" id="accordionExample">
				<accordion-list
					v-for="(patchnote, index) of dataFetch.patchnote"
					:key="patchnote.id"
					:patchnote="patchnote"
					:isFirstOrLast="[index, dataFetch.patchnote.length - 1]"
				/>
			</div>
		</div>
	</div>
</template>

<!-- :isFirstOrLast="checkFirstOrLast(patchnote)" -->
