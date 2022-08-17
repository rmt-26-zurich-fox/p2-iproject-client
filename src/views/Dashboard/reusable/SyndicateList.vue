<script>
	export default {
		props: ["data"],
		computed: {
			standing() {
				let dataNumber = 0;
				this.data.standingStages.forEach(x => {
					dataNumber += x;
				});
				return dataNumber;
			},
			level() {
				return this.data.enemyLevels.join("-");
			},
			reward() {
				let buffer = "<ul>";
				this.data.rewardPool.forEach(x => {
					buffer += `<li>${x}</li>`;
				});
				return buffer + "</ul>";
			},
		},
	};
</script>
<template>
	<tr>
		<td class="padding-custom ps-3">
			<span
				class="button-custom pe-1 w-100"
				type="button"
				data-mdb-toggle="collapse"
				:data-mdb-target="`#${this.data.id}`"
				aria-expanded="false"
				aria-controls="collapseExample"
			>
				{{ data.type }}
			</span>
			<div class="collapse test" :id="`${this.data.id}`" v-html="reward"></div>
		</td>
		<td class="text-center">{{ standing }}</td>
		<td class="text-end pe-3">{{ level }}</td>
	</tr>
</template>

<style>
	.test {
		display: block;
		width: 200px;
		white-space: break-word;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
