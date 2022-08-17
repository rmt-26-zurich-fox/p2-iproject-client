<script>
import { useFoodStore } from "../stores/food";
import { mapActions, mapState } from "pinia";
import Swal from "sweetalert2";
export default {
	data() {
		return {
			input: {
				weight: 0,
				height: 0,
				age: 0,
				gender: "",
			},
		};
	},
	methods: {
		...mapActions(useFoodStore, ["fatCalculator"]),
		bmrCount() {
			Swal.fire({
				title: "Loading",
				timer: 1500,
				didOpen: () => {
					Swal.showLoading();
				},
			}).finally(() => {
				this.fatCalculator(this.input);
			});
		},
	},
	computed: {
		...mapState(useFoodStore, ["fat"]),
	},
};
</script>
<template>
	<div class="relative w-full">
		<div class="relative bg-yellow-50">
			<!-- Container -->
			<div
				class="flex flex-wrap min-h-screen w-full content-center justify-center bg-yellow-100 py-10"
			>
				<!-- Login component -->
				<div class="flex shadow-md bg-white">
					<!-- Login form -->
					<div
						class="flex flex-wrap content-center justify-center rounded-l-md bg-white"
						style="width: 24rem; height: 36rem"
					>
						<div class="w-72">
							<!-- Heading -->
							<h1 class="text-xl font-semibold">BMR Calculator</h1>
							<small class="text-gray-400">Fill in the box below</small>

							<!-- Form -->
							<form class="mt-4" @submit.prevent="bmrCount">
								<div class="grid gap-1 mb-6 md:grid-cols-2">
									<div>
										<label
											for="weight"
											class="block mb-2 text-sm font-medium text-gray-900"
											>Weight</label
										>
										<input
											v-model="input.weight"
											type="number"
											id="weight"
											min="0"
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											placeholder="70 kg"
											required
										/>
									</div>
									<div>
										<label
											for="height"
											class="block mb-2 text-sm font-medium text-gray-900"
											>Height</label
										>
										<input
											v-model="input.height"
											type="text"
											id="height"
											min="0"
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											placeholder="175 cm"
											required
										/>
									</div>
									<div>
										<label
											for="age"
											class="block mb-2 text-sm font-medium text-gray-900"
											>Age</label
										>
										<input
											v-model="input.age"
											type="number"
											id="age"
											min="0"
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											placeholder="20 y.o"
											required
										/>
									</div>
									<div>
										<label
											for="gender"
											class="block mb-2 text-sm font-medium text-gray-900"
											>Gender</label
										>
										<select
											v-model="input.gender"
											id="gender"
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											required
										>
											<option selected disabled>--- select ---</option>
											<option value="male">Male</option>
											<option value="female">Female</option>
										</select>
									</div>
								</div>

								<div class="mb-3">
									<button
										class="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md"
									>
										confirm
									</button>
								</div>

								<div class="overflow-x-auto relative">
									<table class="w-full text-sm text-left text-gray-500">
										<thead class="text-xs text-gray-700 uppercase bg-gray-50">
											<tr>
												<th scope="col" class="py-3 px-6">Calculator</th>
												<th scope="col" class="py-3 px-6">
													<i class="fas fa-user"></i>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr class="bg-white border-b">
												<th
													scope="row"
													class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
												>
													<i class="fas fa-fire-alt"> - Fat</i>
												</th>
												<td class="py-4 px-6 text-black">
													{{ fat.bfp ? `${fat.bfp} %` : "-" }}
												</td>
											</tr>
											<tr class="bg-white border-b">
												<th
													scope="row"
													class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
												>
													<i class="fas fa-bread-slice"> - Fat Mass</i>
												</th>
												<td class="py-4 px-6 text-black">
													{{ fat.fat_mass ? `${fat.fat_mass} %` : "-" }}
												</td>
											</tr>
											<tr class="bg-white">
												<th
													scope="row"
													class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
												>
													<i class="fas fa-hamburger"> - Lean Mass</i>
												</th>
												<td class="py-4 px-6 text-black">
													{{ fat.lean_mass ? `${fat.lean_mass} %` : "-" }}
												</td>
											</tr>
											<tr class="bg-white">
												<th
													scope="row"
													class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
												>
													<i class="fas fa-drumstick-bite"> - Health</i>
												</th>
												<td class="py-4 px-6 text-black">
													{{ fat.description ? fat.description : "-" }}
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</form>
						</div>
					</div>

					<!-- Login banner -->
					<div
						class="flex flex-wrap content-center justify-center rounded-r-md bg-white"
						style="width: 65rem; height: 32rem"
					>
						<img
							class="w-full h-full object-cover bg-center bg-no-repeat bg-cover rounded-r-md"
							src="../assets/img/bfp.jpeg"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
