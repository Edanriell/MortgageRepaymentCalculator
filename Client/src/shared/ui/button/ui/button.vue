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
		v-motion
		:duration="200"
		:hovered="{
			scale: 1.05,
			backgroundColor: 'rgba(216, 219, 47, 0.5)'
		}"
		:initial="{
			scale: 1,
			backgroundColor: 'rgba(216, 219, 47, 1)'
		}"
		:tapped="{
			scale: 0.95,
			backgroundColor: 'rgba(216, 219, 47, 0.5)'
		}"
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
		text-decoration-skip-ink: none;
		color: var(--color-slate-700);
		text-align: left;
		width: fit-content;
		transition: color 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
		will-change: color;
		position: relative;

		&:hover {
			color: var(--color-slate-900);

			&::before {
				background: var(--color-slate-900);
				opacity: 0;
			}
		}

		&:focus {
			color: var(--color-slate-900);

			&::before {
				background: var(--color-slate-900);
				opacity: 0;
			}
		}

		&:active {
			color: var(--color-slate-900);

			&::before {
				background: var(--color-slate-900);
				opacity: 0;
			}
		}

		&::before {
			content: "";
			display: block;
			width: 100%;
			height: 1rem;
			background: var(--color-slate-700);
			position: absolute;
			bottom: 1rem;
			left: 0;
			opacity: 1;
			transition:
				opacity 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955),
				color 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
			will-change: opacity, color;
		}

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
