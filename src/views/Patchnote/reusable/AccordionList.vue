<script>
	import moment from "moment";
	export default {
		props: ["patchnote", "isFirstOrLast"],
		data() {
			return {
				firstOrLast: { div: {}, button: {} },
			};
		},
		methods: {
			dateFormat(dataTime) {
				return moment(dataTime).format("LLLL");
			},
		},
		computed: {
			fixes() {
				let result = this.patchnote.fixes
					.split("\n")
					.map(data => {
						if (data) {
							return `<li>${data}</li>`;
						}
					})
					.join("");
				return result;
			},
			changes() {
				let result = this.patchnote.changes
					.split("\n")
					.map(data => {
						if (data) {
							return `<li>${data}</li>`;
						}
					})
					.join("");
				return result;
			},
			type() {
				if (this.patchnote.type === "Hotfix") {
					return `<div class="badge bg-primary">${this.patchnote.type}</div>`;
				} else if (this.patchnote.type === "Update") {
					return `<div class="badge bg-secondary">${this.patchnote.type}</div>`;
				} else {
					return this.patchnote.type;
				}
			},
			style() {
				if (this.isFirstOrLast === "first") {
					this.firstOrLast.button = { "button-patchnote-first": true, "accordion-button": true };
					this.firstOrLast.div = { "button-patchnote-first": true, "accordion-item": true };
				} else if (this.isFirstOrLast === "last") {
					this.firstOrLast.button = { "button-patchnote-last": true, "accordion-button": true };
					this.firstOrLast.div = { "button-patchnote-last": true, "accordion-item": true };
				} else {
					this.firstOrLast.button = { "accordion-button": true };
					this.firstOrLast.div = { "accordion-item": true };
				}
			},
		},
		created() {
			this.style;
		},
	};
</script>

<template>
	<div :class="firstOrLast.div">
		<h2 class="accordion-header w-100" id="headingOne">
			<button
				:class="firstOrLast.button"
				type="button"
				data-mdb-toggle="collapse"
				:data-mdb-target="`#collapse${patchnote.id}`"
				aria-expanded="true"
				:aria-controls="`collapse${patchnote.id}`"
			>
				<span class="h3">{{ patchnote.name }} &nbsp;</span>
				<div v-html="type" class="h4"></div>
			</button>
		</h2>
		<div
			:id="`collapse${patchnote.id}`"
			class="accordion-collapse collapse"
			aria-labelledby="headingOne"
			data-mdb-parent="#accordionExample"
		>
			<nav class="navbar navbar-expand-lg">
				<div class="container">
					<div class="collapse navbar-collapse" id="navbarButtonsExample">
						<a target="_blank" :href="patchnote.url" class="me-auto ms-3">Forum link</a>
						<div class="d-flex align-items-center">
							<div class="d-flex align-items-center me-3">{{ dateFormat(patchnote.date) }}</div>
						</div>
					</div>
				</div>
			</nav>
			<div class="accordion-body">
				<div class="container">
					<section v-if="patchnote.addition">
						<p class="h4">Additions:</p>
						<div id="addition" v-html="patchnote.addition"></div>
						<br />
					</section>
					<section v-if="patchnote.fixes">
						<p class="h4">Fixes:</p>
						<div id="fixes" v-html="fixes"></div>
						<br />
					</section>
					<section v-if="patchnote.changes">
						<p class="h4">Changes:</p>
						<div class="changes" v-html="changes"></div>
						<br />
					</section>
				</div>
			</div>
		</div>
	</div>
</template>
