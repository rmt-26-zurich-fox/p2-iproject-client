<script>
import { useFoodStore } from "../stores/food";
import { mapActions, mapState } from "pinia";
export default {
	props: ["f", "fId"],
	methods: {
		...mapActions(useFoodStore, ["postFavourite", "deleteFavourite"]),
		addCraving(foodId) {
			this.postFavourite(foodId);
		},
		deleteCraving(foodId) {
			this.deleteFavourite(foodId);
		},
	},
	computed: {
		...mapState(useFoodStore, []),
	},
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

				<button
					v-if="this.$route.name === 'home'"
					@click.prevent="addCraving(f.id)"
					type="button"
					class="text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
				>
					favourite
				</button>
				<button
					v-if="this.$route.name === 'craving'"
					@click.prevent="deleteCraving(fId)"
					type="button"
					class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
				>
					Delete
				</button>
			</footer>
		</article>
	</div>
</template>
