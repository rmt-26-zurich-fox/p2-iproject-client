<script>
import { useFoodStore } from "../stores/food";
import { mapActions, mapState } from "pinia";
import Swal from "sweetalert2";
export default {
	data() {
		return {
			data: {
				weight: 0,
				height: 0,
			},
		};
	},
	methods: {
		...mapActions(useFoodStore, ["bmiCalculator"]),
		bmiCount() {
			Swal.fire({
				title: "Loading",
				timer: 1500,
				didOpen: () => {
					Swal.showLoading();
				},
			}).finally(() => {
				this.bmiCalculator(this.data);
			});
		},
	},
	computed: {
		...mapState(useFoodStore, ["bmi"]),
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
				<div class="flex shadow-md">
					<div
						class="flex flex-wrap content-center justify-center rounded-l-md bg-white"
						style="width: 24rem; height: 32rem"
					>
						<div class="w-72">
							<!-- Heading -->
							<h1 class="text-xl font-semibold">BMI Calculator</h1>
							<small class="text-gray-400">Fill in the box below</small>

							<!-- Form -->
							<form @submit.prevent="bmiCount" class="mt-4">
								<div class="mb-3">
									<label class="mb-2 block text-xs font-semibold">Weight</label>
									<input
										type="number"
										v-model="data.weight"
										min="0"
										placeholder="70 kg"
										class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
										required
									/>
								</div>

								<div class="mb-3">
									<label class="mb-2 block text-xs font-semibold">Height</label>
									<input
										type="number"
										v-model="data.height"
										min="0"
										placeholder="175 cm"
										class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
										required
									/>
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
													<i class="fas fa-weight"> - BMI</i>
												</th>
												<td class="py-4 px-6 text-black">{{ bmi.bmi }}</td>
											</tr>
											<tr class="bg-white border-b">
												<th
													scope="row"
													class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
												>
													<i class="fas fa-heartbeat"> - Health</i>
												</th>
												<td class="py-4 px-6 text-black">{{ bmi.health }}</td>
											</tr>
											<tr class="bg-white">
												<th
													scope="row"
													class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
												>
													<i class="fas fa-medkit"> - BMI Range</i>
												</th>
												<td class="py-4 px-6 text-black">
													{{ bmi.healthy_bmi_range }}
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</form>
						</div>
					</div>

					<div
						class="flex flex-wrap content-center justify-center rounded-r-md bg-white"
						style="width: 55rem; height: 32rem"
					>
						<img
							class="scale-75 w-full h-full object-cover bg-center bg-no-repeat bg-cover rounded-r-md"
							src="../assets/img/bmi.png"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
