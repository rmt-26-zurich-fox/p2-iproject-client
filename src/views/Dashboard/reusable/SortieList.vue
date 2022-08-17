<script>
	import { mapActions, mapState } from "pinia";
	import { dashboard } from "@/stores/dashboard.js";
	export default {
		props: ["sortie"],
	};
</script>
<template>
	<tr style="border-bottom: 1px solid black">
		<td style="padding-inline: 10px" class="text-center">{{ sortie.missionType }}</td>
		<td style="padding-inline: 10px">{{ sortie.modifier }}</td>
		<td class="fw-bold pe-2 ps-2">{{ sortie.node }}</td>
	</tr>
	<tr style="border-bottom: 1px solid black">
		<td colspan="3" class="text-center">{{ sortie.modifierDescription }}</td>
	</tr>
</template>
