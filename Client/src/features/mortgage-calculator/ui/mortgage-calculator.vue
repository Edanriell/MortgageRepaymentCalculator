<script lang="ts" setup>
	import { computed, ref } from "vue";

	import { Input } from "@shared/ui/input/ui";
	import { Button } from "@shared/ui/button/ui";

	import { useMortgageCalculatorStore } from "../model";
	import {
		isNumericString,
		validateInterestRate,
		validateMortgageAmount,
		validateMortgageTerm,
		validateMortgageType
	} from "../lib";

	const store = useMortgageCalculatorStore();

	const inputsValidationState = ref({
		mortgageAmount: {
			isInputValid: "idle",
			errorMessage: ""
		},
		mortgageTerm: {
			isInputValid: "idle",
			errorMessage: ""
		},
		interestRate: {
			isInputValid: "idle",
			errorMessage: ""
		},
		mortgageType: {
			isInputValid: "idle",
			errorMessage: ""
		}
	});

	const validateInputs = () => {
		inputsValidationState.value.mortgageAmount = validateMortgageAmount(store.mortgageAmount);
		inputsValidationState.value.mortgageTerm = validateMortgageTerm(store.mortgageTerm);
		inputsValidationState.value.interestRate = validateInterestRate(store.interestRate);
		inputsValidationState.value.mortgageType = validateMortgageType(store.mortgageType);

		return !Object.values(inputsValidationState.value).some(
			(input) => input.isInputValid === "valid"
		);
	};

	const formattedMortgageAmount = computed({
		get() {
			if (isNumericString(store.mortgageAmount)) {
				return store.mortgageAmount
					? parseInt(store.mortgageAmount.replace(/,/g, ""), 10).toLocaleString()
					: "";
			} else {
				return store.mortgageAmount;
			}
		},
		set(value: string) {
			store.setMortgageAmount(value);
		}
	});

	const formattedMortgageTerm = computed({
		get() {
			return store.mortgageTerm;
		},
		set(value: string) {
			store.setMortgageTerm(value);
		}
	});

	const formattedInterestRate = computed({
		get() {
			return store.interestRate;
		},
		set(value: string) {
			const cleanedValue = value.replace(/,/g, ""); // Remove commas for numeric validation
			const parsedValue = parseFloat(cleanedValue);

			if (/^\d+(,\d{3})*(\.\d+)?$/.test(value)) {
				if (parsedValue > 0 && parsedValue <= 100) {
					store.setInterestRate(parsedValue.toFixed(2)); // Store with two decimal places
				}
			} else {
				store.setInterestRate(value);
			}
		}
	});

	const handleCalculateRepaymentsClick = () => {
		if (validateInputs()) {
			console.log("Valid inputs, calculating repayments...");
		} else {
			console.log("Invalid inputs, fix the errors.");
		}
	};
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
				<Button button-text="Clear All" button-type="text-only" @click="store.$reset()" />
			</header>
			<div class="mortgage-calculator__mortgage-calculator-content mortgage-calculator-content">
				<fieldset class="mortgage-calculator-content__fieldset">
					<legend class="mortgage-calculator-content__legend">Mortgage Amount</legend>
					<Input
						v-model="formattedMortgageAmount"
						:is-valid="inputsValidationState.mortgageAmount.isInputValid"
						input-classes="input--padding--60rem"
						input-field-classes="mortgage-calculator-content__input-field"
						input-id="mortgage-amount"
						input-name="mortgage-amount"
						input-type="text"
						label-for="mortgage-amount"
						label-name="£"
						label-position="left"
					/>
					<p
						v-if="inputsValidationState.mortgageAmount.isInputValid === 'invalid'"
						v-motion
						:enter="{ opacity: 1, y: 0 }"
						:initial="{ opacity: 0, y: -20 }"
						class="mortgage-calculator__error-message"
					>
						{{ inputsValidationState.mortgageAmount.errorMessage }}
					</p>
				</fieldset>
				<div class="mortgage-calculator-content__input-field-group">
					<fieldset class="mortgage-calculator-content__fieldset">
						<legend class="mortgage-calculator-content__legend">Mortgage Term</legend>
						<Input
							v-model="formattedMortgageTerm"
							:is-valid="inputsValidationState.mortgageTerm.isInputValid"
							input-classes="input--padding--96rem"
							input-field-classes="mortgage-calculator-content__input-field"
							input-id="mortgage-term"
							input-name="mortgage-term"
							input-type="text"
							label-for="mortgage-term"
							label-name="years"
							label-position="right"
						/>
						<p
							v-if="inputsValidationState.mortgageTerm.isInputValid === 'invalid'"
							v-motion
							:enter="{ opacity: 1, y: 0 }"
							:initial="{ opacity: 0, y: -20 }"
							class="mortgage-calculator__error-message"
						>
							{{ inputsValidationState.mortgageTerm.errorMessage }}
						</p>
					</fieldset>
					<fieldset class="mortgage-calculator-content__fieldset">
						<legend class="mortgage-calculator-content__legend">Interest Rate</legend>
						<Input
							v-model="formattedInterestRate"
							:is-valid="inputsValidationState.interestRate.isInputValid"
							input-classes="input--padding--67rem"
							input-field-classes="mortgage-calculator-content__input-field"
							input-id="interest-rate"
							input-name="interest-rate"
							input-type="text"
							label-for="interest-rate"
							label-name="%"
							label-position="right"
						/>
						<p
							v-if="inputsValidationState.interestRate.isInputValid === 'invalid'"
							v-motion
							:enter="{ opacity: 1, y: 0 }"
							:initial="{ opacity: 0, y: -20 }"
							class="mortgage-calculator__error-message"
						>
							{{ inputsValidationState.interestRate.errorMessage }}
						</p>
					</fieldset>
				</div>
				<fieldset class="mortgage-calculator-content__fieldset">
					<legend class="mortgage-calculator-content__legend">Mortgage Type</legend>
					<div class="mortgage-calculator-content__input-field-select-group">
						<div class="mortgage-calculator-content__input-field">
							<Input
								v-model="store.mortgageType"
								:is-selected="store.mortgageType === 'repayment'"
								input-id="repayment"
								input-name="mortgage-type"
								input-type="radio"
								label-for="repayment"
								label-name="Repayment"
								value="repayment"
							/>
						</div>
						<div class="mortgage-calculator-content__input-field">
							<Input
								v-model="store.mortgageType"
								:is-selected="store.mortgageType === 'interest-only'"
								input-id="interest-only"
								input-name="mortgage-type"
								input-type="radio"
								label-for="interest-only"
								label-name="Interest Only"
								value="interest-only"
							/>
						</div>
					</div>
					<p
						v-if="inputsValidationState.mortgageType.isInputValid === 'invalid'"
						v-motion
						:enter="{ opacity: 1, y: 0 }"
						:initial="{ opacity: 0, y: -20 }"
						class="mortgage-calculator__error-message"
					>
						{{ inputsValidationState.mortgageType.errorMessage }}
					</p>
				</fieldset>
				<Button
					button-text="Calculate Repayments"
					button-type="pill"
					@click="handleCalculateRepaymentsClick"
				>
					<template v-slot:icon>
						<img
							alt="Calculator"
							class="button__calculator-icon"
							src="/images/vector/icons/calculator.svg"
						/>
					</template>
				</Button>
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

	.mortgage-calculator__error-message {
		font-family: var(--font-family), sans-serif;
		font-weight: 500;
		font-size: 14rem;
		line-height: 150%;
		color: var(--color-red);
		margin-top: 12rem;
	}
</style>
