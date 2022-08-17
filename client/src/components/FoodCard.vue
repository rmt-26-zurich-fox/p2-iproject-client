<script>
export default {
	props: ["f"],
};
</script>
<template>
	<!-- Column -->
	<div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
		<!-- Article -->
		<article class="overflow-hidden rounded-lg shadow-lg">
			<a>
				<img alt="Placeholder" class="block h-auto w-full" :src="f.image" />
			</a>

			<header
				class="flex items-center justify-between leading-tight p-2 md:p-4"
			>
				<h1 class="text-lg">
					<a class="text-left no-underline hover:underline text-black">
						{{ f.title }}
					</a>
				</h1>
				<span class="inline-flex">
					<img class="w-7" src="../assets/img/calories.png" alt="calories" />
					<p class="text-grey-darker text-sm">{{ f.calories }}</p>
				</span>
			</header>

			<footer class="flex items-center justify-between leading-none p-2 md:p-4">
				<div class="flex flex-wrap mb-1">
					<div class="mx-2 h-12">
						<p><strong>carbs: </strong> {{ f.carbs }}</p>
					</div>
					<div class="mx-2 h-12"><strong>fat: </strong> {{ f.fat }}</div>
					<div class="mx-2 h-12">
						<strong>protein: </strong> {{ f.protein }}
					</div>
				</div>
				<a class="no-underline text-grey-darker hover:text-red-dark">
					<span class="hidden">Like</span>
				</a>
				<button
					type="button"
					class="text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
				>
					favourite
				</button>
			</footer>
		</article>
	</div>
</template>
