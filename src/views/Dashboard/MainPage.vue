<script>
	import NewsPage from "./NewsPage.vue";
	import NightwavePage from "./NightwavePage.vue";
	import SortiePage from "./SortiePage.vue";
	import InvasionsPage from "./InvasionsPage.vue";
	import EventsPage from "./EventsPage.vue";
	import FissuresPage from "./FissuresPage.vue";
	export default { components: { NewsPage, NightwavePage, SortiePage, InvasionsPage, EventsPage, FissuresPage } };
</script>

<template>
	<h1 class="text-center">Timer sebelum reset</h1>
	<div class="d-flex justify-content-center align-items-center">
		<div class="container-fluidd">
			<div class="row">
				<div class="col-auto"><NewsPage /><FissuresPage /></div>
				<div class="col-auto"><NightwavePage /></div>
				<div class="col-auto">
					<SortiePage />
					<div class="row">
						<div class="col"><InvasionsPage /></div>
						<div class="col"><EventsPage /></div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col"></div>
				<div class="col"></div>
			</div>
		</div>
	</div>
</template>
