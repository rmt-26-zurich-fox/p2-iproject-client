<script>
	import NewsPage from "./NewsPage.vue";
	import NightwavePage from "./NightwavePage.vue";
	import SortiePage from "./SortiePage.vue";
	import InvasionsPage from "./InvasionsPage.vue";
	export default { components: { NewsPage, NightwavePage, SortiePage, InvasionsPage } };
</script>

<template>
	<h1 class="text-center">ini template</h1>
	<div class="container-fluid">
		<div class="row">
			<div class="col"><NewsPage /></div>
			<div class="col"><NightwavePage /></div>
			<div class="col"><SortiePage /></div>
			<div class="col"><InvasionsPage /></div>
		</div>
	</div>
</template>
