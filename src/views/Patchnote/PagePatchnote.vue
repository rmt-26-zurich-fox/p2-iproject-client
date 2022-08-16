<script>
	import { mapActions, mapState } from "pinia";
	import AccordionList from "./reusable/AccordionList.vue";
	import { patchnote } from "../../stores/patchnote";
	export default {
		components: { AccordionList },
		computed: {
			...mapState(patchnote, ["dataFetch"]),
		},
		methods: {
			...mapActions(patchnote, ["fetchPatchnote"]),
		},
		async created() {
			await this.fetchPatchnote();
		},
	};
</script>
<template>
	<div class="container"><p class="text-center">test</p></div>
	<div class="container">
		<div class="">
			<div class="accordion accordion-flush" id="accordionExample">
				<accordion-list v-for="patchnote of this.dataFetch.patchnote" :key="patchnote.id" :patchnote="patchnote" />
			</div>
		</div>
	</div>
</template>
