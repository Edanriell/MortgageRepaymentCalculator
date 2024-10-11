<script lang="ts" setup>
	type ButtonProps = {
		buttonText: string;
		buttonType: "text-only" | "pill";
	};

	const { buttonText, buttonType } = defineProps<ButtonProps>();

	defineEmits(["click"]);
</script>

<template>
	<button
		v-if="buttonType === 'pill'"
		class="button button--type--pill"
		type="button"
		@click="$emit('click')"
	>
		<slot name="icon"></slot>
		<span>{{ buttonText }}</span>
	</button>
	<button
		v-if="buttonType === 'text-only'"
		class="button button--type--text-only"
		type="button"
		@click="$emit('click')"
	>
		{{ buttonText }}
	</button>
</template>

<style scoped>
	.button {
		cursor: pointer;
		display: block;
	}

	.button__calculator-icon {
		flex: 0 0 auto;
		width: 18rem;
		height: 20rem;
	}

	.button--type--text-only {
		font-family: var(--font-family), sans-serif;
		font-weight: 500;
		font-size: 16rem;
		line-height: 150%;
		text-decoration: underline;
		text-decoration-skip-ink: none;
		color: var(--color-slate-700);
		text-align: left;
		width: fit-content;

		@media (width >= 768px) {
			text-align: unset;
		}
	}

	.button--type--pill {
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
