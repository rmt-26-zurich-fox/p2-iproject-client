<script>
import { useFoodStore } from "../stores/food";
import { mapActions, mapWritableState } from "pinia";
export default {
	data() {
		return {
			show: false,
		};
	},
	methods: {
		...mapActions(useFoodStore, []),
		home() {
			this.$router.push({ name: "home" });
		},
		health() {
			// this.$router.push("/health");
			if (this.show === false) this.show = true;
			else this.show = false;
		},
		crave() {
			this.$router.push({ name: "craving" });
		},
		bmi() {
			this.$router.push({ name: "bmi" });
		},
		bmr() {
			this.$router.push({ name: "bmr" });
		},
		fpc() {
			this.$router.push({ name: "fat-percentage" });
		},
		loginPage() {
			this.$router.push({ name: "login" });
		},
		handleLogout() {
			localStorage.clear();
			this.isLogin = false;
			this.$router.push({ name: "login" });
		},
	},
	computed: {
		...mapWritableState(useFoodStore, ["isLogin", "isLogout"]),
	},
};
</script>
<template>
	<nav class="fixed z-10 w-full bg-white md:absolute md:bg-transparent">
		<div class="container m-auto px-2 md:px-12 lg:px-7">
			<div
				class="flex flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0"
			>
				<div class="w-full px-6 flex justify-between lg:w-max md:px-0">
					<a
						@click.prevent="home"
						aria-label="logo"
						class="flex space-x-2 items-center"
					>
						<img
							src="../assets/img/apple.png"
							class="w-12"
							alt="tailus logo"
							width="144"
							height="133"
						/>
						<span class="text-2xl font-bold text-yellow-900"
							>DIEAT <span class="text-yellow-700">.dotkom</span></span
						>
					</a>

					<button
						aria-label="humburger"
						id="hamburger"
						class="relative w-10 h-10 -mr-2 lg:hidden"
					>
						<div
							aria-hidden="true"
							id="line"
							class="inset-0 w-6 h-0.5 m-auto rounded bg-yellow-900 transtion duration-300"
						></div>
						<div
							aria-hidden="true"
							id="line2"
							class="inset-0 w-6 h-0.5 mt-2 m-auto rounded bg-yellow-900 transtion duration-300"
						></div>
					</button>
				</div>

				<div
					class="hidden w-full lg:flex flex-wrap justify-end items-center space-y-6 p-6 rounded-xl bg-white md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent lg:w-7/12"
				>
					<div class="text-gray-600 lg:pr-4">
						<div
							class="space-y-6 tracking-wide font-medium text-sm md:flex md:space-y-0"
						>
							<div>
								<a
									@click.prevent="home"
									class="block md:px-4 transition hover:text-yellow-700"
								>
									<span>Home</span>
								</a>
							</div>
							<div>
								<a
									@click="health"
									class="block md:px-4 transition hover:text-yellow-700"
								>
									<span>Health</span> <i class="fas fa-caret-down"></i>
								</a>
								<div text="Menu" v-show="show">
									<div class="absolute rounded-md shadow-xs">
										<a
											@click.prevent="bmi"
											class="block float-none px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
										>
											BMI
										</a>
										<a
											@click.prevent="bmr"
											class="block float-none px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
										>
											BMR
										</a>
										<a
											@click.prevent="fpc"
											class="block float-none px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
										>
											Fat Percentage
										</a>
									</div>
								</div>
							</div>

							<div>
								<a
									@click.prevent="crave"
									class="block md:px-4 transition hover:text-yellow-700"
								>
									<span>Cravings</span>
								</a>
							</div>
						</div>
					</div>

					<div
						class="w-full space-y-2 border-yellow-200 lg:space-y-0 md:w-max lg:border-l"
					>
						<button
							v-if="isLogout"
							@click.prevent="loginPage"
							type="button"
							title="Sign-in"
							class="w-full ml-5 py-3 px-6 text-center rounded-full transition bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 sm:w-max"
						>
							<span class="block text-yellow-800 font-semibold text-sm">
								Login
							</span>
						</button>
						<button
							v-if="isLogin"
							@click.prevent="handleLogout"
							type="button"
							title="Sign-in"
							class="w-full ml-5 py-3 px-6 text-center rounded-full transition bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 sm:w-max"
						>
							<span class="block text-yellow-800 font-semibold text-sm">
								Logout
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<style>
a,
a label {
	cursor: pointer;
}
</style>
