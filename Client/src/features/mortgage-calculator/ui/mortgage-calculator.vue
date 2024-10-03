<script lang="ts" setup></script>

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
					<div class="mortgage-calculator-content__input-field">
						<label
							class="input__label input__label--position-left input__label--color--light"
							for="mortgage-amount"
							>£</label
						>
						<input
							id="mortgage-amount"
							class="input input--type--text"
							name="mortgage-amount"
							type="text"
						/>
					</div>
				</fieldset>
				<div class="mortgage-calculator-content__input-field-group">
					<fieldset class="mortgage-calculator-content__fieldset">
						<legend class="mortgage-calculator-content__legend">Mortgage Term</legend>
						<div class="mortgage-calculator-content__input-field">
							<label
								class="input__label input__label--position-right input__label--color--light"
								for="mortgage-term"
								>years</label
							>
							<input
								id="mortgage-term"
								class="input input--type--text"
								name="mortgage-term"
								type="text"
							/>
						</div>
					</fieldset>
					<fieldset class="mortgage-calculator-content__fieldset">
						<legend class="mortgage-calculator-content__legend">Interest Rate</legend>
						<div class="mortgage-calculator-content__input-field">
							<label
								class="input__label input__label--position-right input__label--color--light"
								for="interest-rate"
								>%</label
							>
							<input
								id="interest-rate"
								class="input input--type--text"
								name="interest-rate"
								type="text"
							/>
						</div>
					</fieldset>
				</div>
				<fieldset class="mortgage-calculator-content__fieldset">
					<legend class="mortgage-calculator-content__legend">Mortgage Type</legend>
					<div class="mortgage-calculator-content__input-field-select-group">
						<div class="mortgage-calculator-content__input-field">
							<label
								class="input__label input__label--type--button input__label--color--dark"
								for="repayment"
								><span>Repayment</span></label
							>
							<input
								id="repayment"
								class="input input--type--radio"
								name="mortgage-type"
								type="radio"
							/>
						</div>
						<div class="mortgage-calculator-content__input-field">
							<label
								class="input__label input__label--type--button input__label--color--dark"
								for="interest-only"
								><span>Interest Only</span></label
							>
							<input
								id="interest-only"
								class="input input--type--radio"
								name="mortgage-type"
								type="radio"
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
	}

	.mortgage-calculator__header {
		display: flex;
		flex-direction: column;
		row-gap: 8rem;
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
	}

	.mortgage-calculator-content__input-field-select-group {
		display: flex;
		flex-direction: column;
		row-gap: 12rem;
	}

	.input {
		position: relative;
	}

	.input--type--text {
		width: inherit;
		border: 1rem solid var(--color-slate-500);
		border-radius: 4rem;
		font-family: var(--font-family), sans-serif;
		font-weight: 700;
		font-size: 18rem;
		line-height: 125%;
		color: var(--color-slate-900);
		padding: 12.5rem 0;
	}

	.input--type--radio {
		width: 24rem;
		height: 24rem;
		position: absolute;
		top: 50%;
		left: 16rem;
		transform: translateY(-50%);
	}

	.input__label {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.input__label--position-left {
		background: var(--color-slate-100);
		position: absolute;
		height: 100%;
		padding: 0 16rem;
		top: 0;
		left: 0;
	}

	.input__label--position-right {
		background: var(--color-slate-100);
		position: absolute;
		height: 100%;
		padding: 0 16rem;
		top: 0;
		right: 0;
	}

	.input__label--type--button {
		border: 1rem solid var(--color-slate-500);
		border-radius: 4rem;
		width: inherit;
		height: 48rem;
		background-color: transparent;

		> span {
			position: absolute;
			top: 50%;
			left: 56rem;
			transform: translateY(-50%);
		}
	}

	.input__label--color--light {
		font-family: var(--font-family), sans-serif;
		font-weight: 700;
		font-size: 18rem;
		line-height: 125%;
		color: var(--color-slate-700);
	}

	.input__label--color--dark {
		font-family: var(--font-family), sans-serif;
		font-weight: 700;
		font-size: 18rem;
		line-height: 125%;
		color: var(--color-slate-900);
	}

	.mortgage-calculator__calculator-section {
		background: var(--color-white);
		padding: 32rem 24rem 32rem 24rem;
	}

	.mortgage-calculator__results-section {
		background: var(--color-slate-900);
		padding: 32rem 24rem 32rem 24rem;
	}

	.mortgage-calculator__text {
		font-family: var(--font-family), sans-serif;
		font-weight: 500;
		font-size: 16rem;
		line-height: 150%;
		text-align: center;
		color: var(--color-slate-300);
		margin-top: 16rem;
	}

	.mortgage-calculator__calculations-image {
		width: 193rem;
		height: 192rem;
		display: block;
		margin: 0 auto 16rem;
	}

	.button {
		cursor: pointer;
		display: block;
	}

	.button__calculator-icon {
		width: 25rem;
		height: 24rem;
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
		column-gap: 12rem;
	}
</style>
