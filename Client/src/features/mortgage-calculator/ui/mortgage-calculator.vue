<script lang="ts" setup>
	import { Input } from "@shared/ui/input/ui";
</script>

<template>
	<section class="mortgage-calculator">
		<div class="mortgage-calculator__calculator-section">
			<header class="mortgage-calculator__header">
				<h2
					class="mortgage-calculator__title mortgage-calculator__title--color--dark mortgage-calculator__title--align--left"
				>
					Mortgage Calculator
				</h2>
				<button class="button button--type--text-only" type="button">Clear All</button>
			</header>
			<div class="mortgage-calculator__mortgage-calculator-content mortgage-calculator-content">
				<fieldset class="mortgage-calculator-content__fieldset">
					<legend class="mortgage-calculator-content__legend">Mortgage Amount</legend>
					<Input
						input-classes="input--padding--60rem"
						input-field-classes="mortgage-calculator-content__input-field"
						input-id="mortgage-amount"
						input-name="mortgage-amount"
						input-type="text"
						label-for="mortgage-amount"
						label-name="£"
						label-position="left"
					/>
				</fieldset>
				<div class="mortgage-calculator-content__input-field-group">
					<fieldset class="mortgage-calculator-content__fieldset">
						<legend class="mortgage-calculator-content__legend">Mortgage Term</legend>
						<Input
							input-classes="input--padding--96rem"
							input-field-classes="mortgage-calculator-content__input-field"
							input-id="mortgage-term"
							input-name="mortgage-term"
							input-type="text"
							label-for="mortgage-term"
							label-name="years"
							label-position="right"
						/>
					</fieldset>
					<fieldset class="mortgage-calculator-content__fieldset">
						<legend class="mortgage-calculator-content__legend">Interest Rate</legend>
						<Input
							input-classes="input--padding--67rem"
							input-field-classes="mortgage-calculator-content__input-field"
							input-id="interest-rate"
							input-name="interest-rate"
							input-type="text"
							label-for="interest-rate"
							label-name="%"
							label-position="right"
						/>
					</fieldset>
				</div>
				<fieldset class="mortgage-calculator-content__fieldset">
					<legend class="mortgage-calculator-content__legend">Mortgage Type</legend>
					<div class="mortgage-calculator-content__input-field-select-group">
						<div class="mortgage-calculator-content__input-field">
							<Input
								input-id="repayment"
								input-name="mortgage-type"
								input-type="radio"
								label-for="repayment"
								label-name="Repayment"
							/>
						</div>
						<div class="mortgage-calculator-content__input-field">
							<Input
								input-id="interest-only"
								input-name="mortgage-type"
								input-type="radio"
								label-for="interest-only"
								label-name="Interest Only"
							/>
						</div>
					</div>
				</fieldset>
				<button class="button button--type--pill" type="button">
					<img
						alt="Calculator"
						class="button__calculator-icon"
						src="/images/vector/icons/calculator.svg"
					/>
					<span>Calculate Repayments</span>
				</button>
			</div>
		</div>
		<div class="mortgage-calculator__results-section">
			<img
				alt="Calculations"
				class="mortgage-calculator__calculations-image"
				src="/images/vector/calculations.svg"
			/>
			<h2
				class="mortgage-calculator__title mortgage-calculator__title--color--light mortgage-calculator__title--align--center"
			>
				Results shown here
			</h2>
			<p class="mortgage-calculator__text">
				Complete the form and click “calculate repayments” to see what your monthly repayments would
				be.
			</p>
		</div>
	</section>
</template>

<style scoped>
	.mortgage-calculator {
		display: flex;
		flex-direction: column;

		@media (width >= 768px) {
			margin: 40rem;
			border-radius: 24rem;
			overflow: hidden;
			max-width: 688rem;
			box-shadow: 0 32rem 64rem 0 rgba(19, 48, 65, 0.1);
		}

		@media (width >= 1440px) {
			flex-direction: row;
			max-width: 1008rem;
			margin: 209rem 216rem;
			background: var(--color-white);
		}
	}

	.mortgage-calculator__header {
		display: flex;
		flex-direction: column;
		row-gap: 8rem;

		@media (width >= 768px) {
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			row-gap: unset;
		}
	}

	.mortgage-calculator__title {
		font-family: var(--font-family), sans-serif;
		font-weight: 700;
		font-size: 24rem;
		line-height: 125%;
		font-style: normal;
	}

	.mortgage-calculator__title--color--dark {
		color: var(--color-slate-900);
	}

	.mortgage-calculator__title--color--light {
		color: var(--color-white);
	}

	.mortgage-calculator__title--align--left {
		text-align: left;
	}

	.mortgage-calculator__title--align--center {
		text-align: center;
	}

	.mortgage-calculator__mortgage-calculator-content {
		margin-top: 24rem;

		@media (width >= 768px) {
			margin-top: 40rem;
		}
	}

	.mortgage-calculator-content {
		display: flex;
		flex-direction: column;
		row-gap: 24rem;
	}

	.mortgage-calculator-content__fieldset {
		margin: unset;
		padding: unset;
		border: unset;

		@media (width >= 768px) {
			width: 100%;
		}
	}

	.mortgage-calculator-content__legend {
		padding: unset;
		font-family: var(--font-family), sans-serif;
		font-weight: 500;
		font-size: 16rem;
		line-height: 150%;
		color: var(--color-slate-700);
		margin-bottom: 12rem;
	}

	.mortgage-calculator-content__input-field {
		position: relative;
		width: 100%;
	}

	.mortgage-calculator-content__input-field-group {
		display: flex;
		flex-direction: column;
		row-gap: 24rem;

		@media (width >= 768px) {
			flex-direction: row;
			row-gap: unset;
			column-gap: 24rem;
		}
	}

	.mortgage-calculator-content__input-field-select-group {
		display: flex;
		flex-direction: column;
		row-gap: 12rem;
	}

	.mortgage-calculator__calculator-section {
		background: var(--color-white);
		padding: 32rem 24rem 32rem 24rem;

		@media (width >= 768px) {
			padding: 40rem;
		}

		@media (width >= 1440px) {
			flex: 1 1 50%;
		}
	}

	.mortgage-calculator__results-section {
		background: var(--color-slate-900);
		padding: 32rem 24rem 32rem 24rem;

		@media (width >= 768px) {
			padding: 40rem;
		}

		@media (width >= 1440px) {
			flex: 1 1 50%;
			border-radius: 0 0 0 80rem;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	}

	.mortgage-calculator__text {
		font-family: var(--font-family), sans-serif;
		font-weight: 500;
		font-size: 16rem;
		line-height: 150%;
		color: var(--color-slate-300);
		margin-top: 16rem;
		text-align: center;
	}

	.mortgage-calculator__calculations-image {
		width: 192rem;
		height: 192rem;
		display: block;
		margin: 0 auto 16rem;
	}

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
