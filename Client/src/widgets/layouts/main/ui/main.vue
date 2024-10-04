<script lang="ts" setup></script>

<template>
	<main class="main">
		<slot />
	</main>
</template>

<style scoped>
	.main {
		@media (width >= 768px) {
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>
