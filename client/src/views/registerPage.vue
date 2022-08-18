<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
	data(){
		return {
			newUser: {
				username: "",
				email: "",
				password: "",
				age: ""
			}
		}
	},
	methods: {
		...mapActions(useCounterStore, ["register"]),
		postRegist(){
			this.register(this.newUser)
		}
	}
}
</script>

<template>
<body class="bg-white -mt-10">
		<!-- Container -->
		<div class="container mx-auto">
			<div class="flex justify-center px-6 my-12">
				<!-- Row -->
				<div class="w-full xl:w-3/4 lg:w-11/12 flex">
					<!-- Col -->
					<div
						class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
						style="background-image: url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')"
					></div>
					<!-- Col -->
					<div class="w-full lg:w-7/12 bg-gray-200 p-5 rounded-lg lg:rounded-l-none">
						<h3 class="pt-4 text-2xl text-center">Create an Account!</h3>
						<form @submit.prevent="postRegist" class="px-8 pt-6 pb-8 mb-4 bg-gray-200 rounded">
								<div class="mb-4 ">
									<label class="block mb-2  text-sm font-bold text-gray-700" for="firstName">
										Username
									</label>
									<input
										v-model="newUser.username"
										class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="Username"
										type="text"
										placeholder="Username"
									/>
								</div>
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="email">
									Email
								</label>
								<input
									v-model="newUser.email"
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									type="email"
									placeholder="Email"
								/>
							</div>
							<div class="mb-4 md:flex md:justify-between">
								<div class="mb-4 md:mr-2 md:mb-0">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="password">
										Password
									</label>
									<input
										v-model="newUser.password"
										class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="password"
										type="password"
										placeholder="******************"
									/>
								</div>
							</div>
							<div class="mb-4 md:flex md:justify-between">
								<div class="mb-4 md:mr-2 md:mb-0">
									<label class="block mb-2 text-sm font-bold text-gray-700" for="password">
										Age
									</label>
									<input
										v-model="newUser.age"
										class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="age"
										type="age"
										placeholder="0"
									/>
								</div>
							</div>
							<div class="mb-6 text-center">
								<button
									class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="submit"
								>
									Register Account
								</button>
							</div>
							<hr class="mb-6 border-t" />
							<div class="text-center">
								<a
									class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="#"
								>
									Forgot Password?
								</a>
							</div>
							<div class="text-center">
								<a
									class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="./index.html"
								>
									Already have an account? Login!
								</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</body>
</template>