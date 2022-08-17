<script>
	import NewsPage from "./NewsPage.vue";
	import NightwavePage from "./NightwavePage.vue";
	import SortiePage from "./SortiePage.vue";
	export default { components: { NewsPage, NightwavePage, SortiePage } };
</script>

<template>
	<h1 class="text-center">ini template</h1>
	<div class="d-flex flex-wrap justify-content-center">
		<div class=""><NewsPage /></div>
		<div class=""><NightwavePage /></div>
		<div class=""><SortiePage /></div>
	</div>
</template>
