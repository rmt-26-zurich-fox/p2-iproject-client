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
			checkFirstOrLast(dataPatchnote) {
				if (this.dataFetch.patchnote.length) {
					if (dataPatchnote.id === this.dataFetch.patchnote[0].id) {
						this.isFirstOrLast = "first";
						return this.isFirstOrLast;
					} else if (dataPatchnote.id === this.dataFetch.patchnote[this.dataFetch.patchnote.length - 1].id) {
						this.isFirstOrLast = "last";
						return this.isFirstOrLast;
					}
				}
			},
		},
		async created() {
			await this.fetchPatchnote();
		},
	};
</script>
<template>
	<div class="container"><p class="text-center">Patchnote List</p></div>
	<div class="container">
		<div class="mb-5">
			<div class="accordion accordion-flush" id="accordionExample">
				<accordion-list
					v-for="patchnote of this.dataFetch.patchnote"
					:key="patchnote.id"
					:patchnote="patchnote"
					:isFirstOrLast="checkFirstOrLast(patchnote)"
				/>
			</div>
		</div>
	</div>
</template>
