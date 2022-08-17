<script>
import { mapActions } from "pinia";
import { useFoodStore } from "../stores/food";
export default {
	data() {
		return {
			login: {
				email: "",
				password: "",
			},
		};
	},
	methods: {
		...mapActions(useFoodStore, ["postLogin", "googleLogin"]),
		handleLogin() {
			this.postLogin(this.login.email, this.login.password);
		},
		handleCredentialResponse(response) {
			this.googleLogin(response);
		},
	},
	mounted() {
		const cb = this.handleCredentialResponse;
		window.onload = function () {
			google.accounts.id.initialize({
				client_id:
					"118582985720-1s4kpct8vd3382dfan693in452rmoojt.apps.googleusercontent.com",
				callback: cb,
			});
			google.accounts.id.renderButton(
				document.getElementById("google-login"),
				{ theme: "outline", size: "large" } // customization attributes
			);
		};
	},
};
</script>
<template>
	<!-- Login Page -->
	<section>
		<div
			class="w-full h-screen font-sans bg-cover bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500"
		>
			<div
				class="container flex items-center justify-center flex-1 h-full mx-auto"
			>
				<div class="w-full max-w-lg">
					<div class="leading-loose">
						<form
							@submit.prevent="handleLogin"
							class="max-w-sm p-10 m-auto bg-black bg-opacity-25 rounded-xl shadow-xl"
						>
							<p class="mb-8 text-2xl font-bold text-center text-white">
								DIEAT
							</p>
							<p class="text-center text-red-600"></p>
							<div class="mb-2">
								<div class="relative">
									<input
										v-model="login.email"
										type="text"
										class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
										placeholder="email@mail.com"
									/>
								</div>
							</div>
							<div class="mb-2">
								<div class="relative">
									<input
										v-model="login.password"
										type="password"
										class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
										placeholder="password"
									/>
								</div>
							</div>
							<div class="flex items-center justify-between mt-4">
								<button
									type="submit"
									class="m-auto py-2 bg-indigo-800 hover:bg-indigo-600 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-40 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
								>
									Login
								</button>
							</div>

							<div class="relative py-4">
								<div class="absolute inset-0 flex items-center">
									<div class="w-full border-b border-gray-300"></div>
								</div>
								<div class="relative flex justify-center">
									<span class="bg-white px-4 text-sm text-gray-500">Or</span>
								</div>
							</div>
							<div class="flex justify-center mt-3">
								<div id="google-login"></div>
							</div>
						</form>
						<div class="text-center mt-3">
							<router-link
								to="/register"
								class="text-white right-0 inline-block text-sm font-light align-baseline text-500 hover:text-stone-800"
								text="Create an account"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- END Login Page -->
</template>
