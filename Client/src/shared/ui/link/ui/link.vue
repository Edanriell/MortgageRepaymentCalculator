<script lang="ts" setup>
	type LinkProps = {
		linkText: string;
		linkHref: string;
	};

	const { linkText, linkHref } = defineProps<LinkProps>();
</script>

<template>
	<a
		v-motion
		:duration="200"
		:hovered="{
			scale: 1.05,
			backgroundColor: 'rgba(216, 219, 47, 0.5)'
		}"
		:href="linkHref"
		:initial="{
			scale: 1,
			backgroundColor: 'rgba(216, 219, 47, 1)'
		}"
		:tapped="{
			scale: 0.95,
			backgroundColor: 'rgba(216, 219, 47, 0.5)'
		}"
		class="link link--type--pill"
	>
		<slot name="icon"></slot>
		<span>{{ linkText }}</span>
	</a>
</template>

<style scoped>
	.link {
		cursor: pointer;
		display: block;
	}

	.link__calculator-icon {
		flex: 0 0 auto;
		width: 18rem;
		height: 20rem;
	}

	.link--type--pill {
		border-radius: 999rem;
		background: var(--color-lime);
		font-family: var(--font-family), sans-serif;
		font-weight: 700;
		font-size: 18rem;
		line-height: 125%;
		text-align: center;
		color: var(--color-slate-900);
		width: 100%;
		padding: 16.5rem 0;
		display: flex;
		align-items: center;
		justify-content: center;
		column-gap: 15.75rem;

		> span {
			flex: 0 0 auto;
		}

		@media (width >= 768px) {
			width: fit-content;
			padding: 16.5rem 40rem 16.5rem 43.75rem;
			margin-top: 16rem;
		}
	}
</style>
