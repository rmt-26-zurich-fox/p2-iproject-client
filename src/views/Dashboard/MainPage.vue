<script>
	import NewsPage from "./NewsPage.vue";
	import NightwavePage from "./NightwavePage.vue";
	import SortiePage from "./SortiePage.vue";
	import InvasionsPage from "./InvasionsPage.vue";
	import EventsPage from "./EventsPage.vue";
	import FissuresPage from "./FissuresPage.vue";
	import SyndicatePages from "./SyndicatePages.vue";
	import CyclePage from "./CyclePage.vue";
	export default {
		components: { NewsPage, NightwavePage, SortiePage, InvasionsPage, EventsPage, FissuresPage, SyndicatePages, CyclePage },
	};
</script>

<template>
	<h1>NEED IMAGE???? https://cdn.warframestat.us/img/${item.imageName}</h1>
	<div class="">
		<div class="float-start">
			<!-- <h1>Test</h1> -->
		</div>
		<div class="text-center"><CyclePage /></div>
	</div>
	<div class="d-flex justify-content-center align-items-center">
		<div class="w-auto">
			<div class="row">
				<div class="col"><NewsPage class="col-12 table-style-mantul" /><FissuresPage class="col-12" /></div>
				<div class="col"><NightwavePage class="col-12" /><SyndicatePages /></div>
				<div class="col">
					<SortiePage class="col-auto" />
					<div class="row">
						<div class="col"><InvasionsPage class="col-12" /></div>
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
