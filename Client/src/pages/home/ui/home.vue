<script lang="ts" setup>
	import { MortgageCalculator } from "@features/mortgage-calculator/ui";

	import { MainLayout } from "@widgets/layouts/main/ui";
</script>

<template>
	<MainLayout>
		<h1 class="visually-hidden">Mortgage repayment calculator</h1>
		<MortgageCalculator />
	</MainLayout>
</template>

<style scoped></style>
