<script>
import FoodCard from "../components/FoodCard.vue";
import { useFoodStore } from "../stores/food";
import { mapActions, mapState } from "pinia";
export default {
	components: { FoodCard },
	methods: {
		...mapActions(useFoodStore, ["fetchFavourite"]),
	},
	computed: {
		...mapState(useFoodStore, ["favourite"]),
	},
	created() {
		this.fetchFavourite();
	},
};
</script>
<template>
	<div class="relative w-full">
		<div class="relative bg-yellow-50">
			<div class="container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7">
				<div class="flex items-center flex-wrap px-2 md:px-0">
					<div class="relative lg:w-6/12 lg:py-24 xl:py-32">
						<h1
							class="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-zinc-600 via-lime-500 to-slate-200 md:text-5xl lg:w-10/12"
						>
							Cravings list.
						</h1>
						<p class="mt-8 text-gray-700 lg:w-10/12">Never stop exploring !</p>
					</div>
					<div class="ml-auto lg:-mb-26 lg:w-6/12">
						<img
							src="../assets/img/sushi.png"
							class="relative"
							alt="food illustration"
							loading="lazy"
							width="700"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!--Card 1-->
	<div class="container my-12 mx-auto px-4 md:px-12">
		<div class="flex flex-wrap -mx-1 lg:-mx-4 items-center">
			<FoodCard v-for="f in favourite" :key="f.id" :f="f.Food" :fId="f.id" />
		</div>
	</div>
</template>
