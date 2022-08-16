<script>
	import NewsList from "./reusable/NewsList.vue";
	export default { components: { NewsList } };
</script>

<template>
	<!-- {{ primaryData.news[0] }} -->
	<div class="mt-1 mb-5">
		<table class="col-4">
			<thead>
				<th colspan="2" class="text-center">Nightwave</th>
			</thead>
			<tbody class="border border-dark">
				<NewsList />
			</tbody>
		</table>
	</div>
</template>
