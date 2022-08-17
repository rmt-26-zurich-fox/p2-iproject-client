<script>
import { useFoodStore } from "../stores/food";
import { mapActions } from "pinia";
export default {
	data() {
		return {
			register: {
				username: "",
				email: "",
				password: "",
			},
		};
	},
	methods: {
		...mapActions(useFoodStore, ["postRegister"]),
		handleRegister() {
			this.postRegister(this.register);
		},
	},
};
</script>
<template>
	<!-- Register Page -->
	<section>
		<div
			class="w-full h-screen font-sans bg-gradient-to-tr from-indigo-400 via-orange-600 to-fuchsia-50"
		>
			<form @submit.prevent="handleRegister">
				<!-- Content -->
				<div class="w-full bg-grey-lightest" style="padding-top: 4rem">
					<div class="container mx-auto py-8">
						<div
							class="w-5/6 lg:w-1/2 mx-auto bg-black bg-opacity-25 rounded shadow"
						>
							<div
								class="py-4 px-8 text-white text-xl border-b border-grey-lighter"
							>
								Register an account
							</div>
							<div class="py-4 px-8">
								<div class="mb-4">
									<label
										class="block text-white text-sm font-bold mb-2"
										for="usernameRegister"
										>Username</label
									>
									<input
										class="appearance-none border rounded w-full py-2 px-3 text-black"
										v-model="register.username"
										type="text"
										placeholder="Your username"
									/>
								</div>
								<div class="mb-4">
									<label
										class="block text-white text-sm font-bold mb-2"
										for="emailRegister"
										>Email Address</label
									>
									<input
										class="appearance-none border rounded w-full py-2 px-3 text-black"
										v-model="register.email"
										type="email"
										placeholder="Your email address"
									/>
								</div>
								<div class="mb-4">
									<label
										class="block text-white text-sm font-bold mb-2"
										for="passwordRegister"
										>Password</label
									>
									<input
										class="appearance-none border rounded w-full py-2 px-3 text-black"
										v-model="register.password"
										type="password"
										placeholder="Your secure password"
									/>
									<p class="text-white text-xs mt-1">At least 5 characters</p>
								</div>

								<div class="flex items-center justify-between mt-4">
									<button
										class="m-auto py-2 px-4 bg-indigo-700 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-52 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
										type="submit"
									>
										Sign Up
									</button>
								</div>
							</div>
						</div>
						<div class="text-center mt-3">
							<router-link
								to="/login"
								class="text-white right-0 inline-block text-sm font-light align-baseline text-500 hover:text-stone-800"
							>
								Already have an account
							</router-link>
						</div>
					</div>
				</div>
			</form>
		</div>
	</section>
	<!-- End Register Page -->
</template>
