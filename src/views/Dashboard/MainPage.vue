<script>
	import NewsPage from "./NewsPage.vue";
	import NightwavePage from "./NightwavePage.vue";
	import SortiePage from "./SortiePage.vue";
	import InvasionsPage from "./InvasionsPage.vue";
	import EventsPage from "./EventsPage.vue";
	import FissuresPage from "./FissuresPage.vue";
	import SyndicatePages from "./SyndicatePages.vue";
	export default { components: { NewsPage, NightwavePage, SortiePage, InvasionsPage, EventsPage, FissuresPage, SyndicatePages } };
</script>

<template>
	<h1 class="text-center">Timer sebelum reset</h1>
	<div class="d-flex justify-content-center align-items-center">
		<div class="container-fluidd">
			<div class="row">
				<div class="col-auto"><NewsPage /><FissuresPage class="col-12" /><EventsPage /></div>
				<div class="col-auto"><NightwavePage /></div>
				<div class="col">
					<SortiePage class="col-12" />
					<div class="row">
						<div class="col"><InvasionsPage /></div>
						<div class="col"><SyndicatePages /></div>
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
