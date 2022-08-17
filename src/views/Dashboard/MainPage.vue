<script>
	import NewsPage from "./NewsPage.vue";
	import NightwavePage from "./NightwavePage.vue";
	import SortiePage from "./SortiePage.vue";
	export default { components: { NewsPage, NightwavePage, SortiePage } };
</script>

<template>
	<h1 class="text-center">ini template</h1>
	<div class="container-fluid">
		<div class="row">
			<div class="col-auto"><NewsPage /></div>
			<div class="col-auto"><NightwavePage /></div>
			<div class="col-auto"><SortiePage /></div>
			<div class="col-auto"><SortiePage /></div>
		</div>
	</div>
</template>
