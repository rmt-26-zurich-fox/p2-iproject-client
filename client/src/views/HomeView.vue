<script>
import FoodCard from "../components/FoodCard.vue";
import { useFoodStore } from "../stores/food";
import { mapActions, mapState } from "pinia";

import Swal from "sweetalert2";
export default {
	components: {
		FoodCard,
	},
	data() {
		return {
			size: 8,
			query: "",
		};
	},
	methods: {
		...mapActions(useFoodStore, ["fetchFood"]),
		loadMore() {
			if (this.foods.totalItems >= this.foods.food.length) {
				this.size += 8;
				this.fetchFood(1, this.size);
			}
		},
		searchFood() {
			this.$router.push({ name: "home", query: { page: 1, q: this.query } });
			this.fetchFood(1, 8, this.query);
		},
	},
	computed: {
		...mapState(useFoodStore, ["foods"]),
	},
	created() {
		Swal.fire({
			title: "Loading",
			timer: 1500,
			didOpen: () => {
				Swal.showLoading();
			},
		}).finally(() => {
			this.fetchFood();
		});
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
							Eat Good, Feel Good.
						</h1>
						<form @submit.prevent="searchFood" class="w-full mt-12">
							<div
								class="relative flex p-1 rounded-full bg-white border border-yellow-200 shadow-md md:p-2"
							>
								<div
									class="hidden p-5 rounded-full bg-transparent md:block md:p-4"
								>
									<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
										Find
									</a>
								</div>
								<input
									v-model="query"
									placeholder="Your favorite food"
									class="w-full p-4 rounded-full"
									type="text"
								/>
								<button
									type="button"
									class="ml-auto py-3 px-6 rounded-full text-center transition bg-gradient-to-b from-yellow-200 to-yellow-300 hover:to-red-300 active:from-yellow-400 focus:from-red-400 md:px-12"
								>
									<span class="hidden text-yellow-900 font-semibold md:block">
										Search
									</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="w-5 mx-auto text-yellow-900 md:hidden"
										fill="currentColor"
										viewBox="0 0 16 16"
									>
										<path
											d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
										/>
									</svg>
								</button>
							</div>
						</form>
						<p class="mt-8 text-gray-700 lg:w-10/12">
							Curious why you are fat ?
							<a class="text-yellow-700">don't be,</a> you are beautiful.
						</p>
					</div>
					<div class="ml-auto lg:-mb-26 lg:w-6/12">
						<img
							src="../assets/img/miayam.png"
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
			<FoodCard v-for="f in foods.food" :key="f.id" :f="f" />
			<button
				v-if="size !== 40"
				@click.prevent="loadMore"
				type="button"
				class="text-black m-auto bg-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-white-300 dark:focus:ring-white-800 shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
			>
				Load More
			</button>
		</div>
	</div>
</template>
