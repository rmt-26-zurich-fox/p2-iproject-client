<script>
	import moment from "moment";
	export default {
		props: ["patchnote"],
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
		},
	};
</script>

<template>
	<div class="accordion-item">
		<h2 class="accordion-header w-100" id="headingOne">
			<button
				class="accordion-button"
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
						<a target="_blank" :href="patchnote.url" class="me-auto">Forum link</a>
						<div class="d-flex align-items-center">
							<div class="d-flex align-items-center">{{ dateFormat(patchnote.date) }}</div>
						</div>
					</div>
				</div>
			</nav>
			<div class="accordion-body">
				<div class="container"></div>
				<section v-if="patchnote.addition">
					<p class="h4">Additions:</p>
					<div id="addition" v-html="patchnote.addition"></div>
				</section>
				<br />
				<section v-if="patchnote.fixes">
					<p class="h4">Fixes:</p>
					<div id="fixes" v-html="fixes"></div>
				</section>
				<br />
				<section v-if="patchnote.changes">
					<p class="h4">Changes:</p>
					<div class="changes" v-html="changes"></div>
				</section>
			</div>
		</div>
	</div>
</template>
