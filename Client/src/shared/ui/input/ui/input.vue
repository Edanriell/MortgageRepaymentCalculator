<script lang="ts" setup>
	type InputProps = {
		modelValue: string;
		labelName: string;
		labelFor: string;
		inputName: string;
		inputClasses?: string;
		inputFieldClasses?: string;
		inputId?: string;
		inputType?: "text" | "number" | "radio";
		labelPosition?: "left" | "right";
		placeholder?: string;
		isSelected?: boolean;
		isValid?: string;
		value?: string;
	};

	const {
		modelValue,
		labelName,
		labelFor,
		inputName,
		inputClasses = "",
		inputFieldClasses = "",
		inputId = "",
		inputType = "number",
		labelPosition = "right",
		placeholder = "",
		isSelected = false,
		isValid = "idle",
		value = ""
	} = defineProps<InputProps>();

	const emit = defineEmits(["update:modelValue"]);

	const updateValue = (event: Event) => {
		const target = event.target as HTMLInputElement;
		emit("update:modelValue", target.value);
	};
</script>

<template>
	<div v-if="inputType === 'text'" :class="inputFieldClasses">
		<label
			:class="{
				input__label: true,
				'input__label--color--light': true,
				'input__label--position-left': labelPosition === 'left',
				'input__label--position-right': labelPosition === 'right',
				'input__label--state--invalid--position--left':
					labelPosition === 'left' && isValid === 'invalid',
				'input__label--state--invalid--position--right':
					labelPosition === 'right' && isValid === 'invalid',
				'input__label--state--valid--position--left':
					labelPosition === 'left' && isValid === 'valid',
				'input__label--state--valid--position--right':
					labelPosition === 'right' && isValid === 'valid'
			}"
			:for="labelFor"
			>{{ labelName }}</label
		>
		<input
			:id="inputId"
			:class="{
				'input input--type--text': true,
				'input--state--invalid': isValid === 'invalid',
				'input--state--valid': isValid === 'valid',
				[inputClasses]: inputClasses
			}"
			:name="inputName"
			:placeholder="placeholder"
			:value="modelValue"
			type="text"
			@input="updateValue"
		/>
	</div>
	<div v-if="inputType === 'number'" :class="inputFieldClasses">
		<label
			:class="{
				input__label: true,
				'input__label--color--light': true,
				'input__label--position-left': labelPosition === 'left',
				'input__label--position-right': labelPosition === 'right',
				'input__label--state--invalid--position--left':
					labelPosition === 'left' && isValid === 'invalid',
				'input__label--state--invalid--position--right':
					labelPosition === 'right' && isValid === 'invalid',
				'input__label--state--valid--position--left':
					labelPosition === 'left' && isValid === 'valid',
				'input__label--state--valid--position--right':
					labelPosition === 'right' && isValid === 'valid'
			}"
			:for="labelFor"
			>{{ labelName }}</label
		>
		<input
			:id="inputId"
			:class="{
				'input input--type--number': true,
				'input--state--invalid': isValid === 'invalid',
				'input--state--valid': isValid === 'valid',
				[inputClasses]: inputClasses
			}"
			:name="inputName"
			:placeholder="placeholder"
			:value="modelValue"
			type="number"
			@input="updateValue"
		/>
	</div>
	<label
		v-if="inputType === 'radio'"
		:class="{
			'radio-input__label': true,
			'input__label--color--dark': true,
			'radio-input__label--state--selected': isSelected
		}"
		:for="labelFor"
	>
		<input
			:id="inputId"
			:class="{
				'radio-input': true
			}"
			:name="inputName"
			:value="value"
			type="radio"
			@change="updateValue"
		/>
		<span
			:class="{
				'radio-input__radio-mark': true,
				'radio-input__radio-mark--state--selected': isSelected
			}"
		></span>
		<span>{{ labelName }}</span>
	</label>
</template>

<style scoped>
	.mortgage-calculator-content__input-field {
		position: relative;
		width: 100%;
	}

	.radio-input__label--state--selected {
		background: rgba(216, 219, 47, 0.15) !important;
		border: 1rem solid var(--color-lime) !important;
		position: relative;
	}

	.input {
		position: relative;
	}

	.input__label--state--invalid--position--left {
		background: var(--color-red) !important;
		color: var(--color-white) !important;
		border-top-left-radius: 4rem;
		border-bottom-left-radius: 4rem;
	}

	.input__label--state--invalid--position--right {
		background: var(--color-red) !important;
		color: var(--color-white) !important;
		border-top-right-radius: 4rem;
		border-bottom-right-radius: 4rem;
	}

	.input__label--state--valid--position--left {
		background: var(--color-lime) !important;
		color: var(--color-slate-900) !important;
		border-top-left-radius: 4rem;
		border-bottom-left-radius: 4rem;
	}

	.input__label--state--valid--position--right {
		background: var(--color-lime) !important;
		color: var(--color-slate-900) !important;
		border-top-right-radius: 4rem;
		border-bottom-right-radius: 4rem;
	}

	.input--state--valid {
		border: 1px solid var(--color-lime) !important;
	}

	.input--state--invalid {
		border: 1px solid var(--color-red) !important;
	}

	.input--padding--60rem {
		padding-left: 60.5rem !important;
		padding-right: 16.5rem !important;
	}

	.input--padding--96rem {
		padding-left: 16.5rem !important;
		padding-right: 96.5rem !important;
	}

	.input--padding--67rem {
		padding-left: 16.5rem !important;
		padding-right: 67.5rem !important;
	}

	.radio-input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
	}

	.radio-input__label {
		display: flex;
		align-items: center;
		cursor: pointer;
		border: 1rem solid var(--color-slate-500);
		border-radius: 4rem;
		width: inherit;
		height: 48rem;
		background-color: transparent;
		will-change: border, background;
		transition:
			border 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955),
			background 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);

		&:hover {
			border: 1px solid var(--color-lime);
		}

		&:active {
			border: 1px solid var(--color-lime);
		}
	}

	.radio-input__radio-mark {
		width: 20rem;
		height: 20rem;
		border-radius: 50%;
		background-color: transparent;
		border: 2rem solid var(--color-slate-700);
		display: inline-block;
		position: relative;
		margin: 0 18.25rem;
		will-change: border;
		transition: border 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
	}

	.radio-input__radio-mark::after {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 10rem;
		height: 10rem;
		border-radius: 50%;
		background: var(--color-lime);
		opacity: 0;
		will-change: opacity;
		transition: opacity 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
	}

	.radio-input__radio-mark--state--selected {
		background-color: transparent !important;
		border-color: var(--color-lime) !important;

		&::after {
			opacity: 1;
		}
	}

	.radio-input__radio-mark:hover {
		background-color: transparent;
		border-color: var(--color-lime);
	}

	.input--type--text {
		width: inherit;
		border: 1rem solid var(--color-slate-500);
		border-radius: 4rem !important;
		font-family: var(--font-family), sans-serif;
		font-weight: 700;
		font-size: 18rem;
		line-height: 125%;
		color: var(--color-slate-900);
		padding: 12.5rem 0;
		position: relative;
		will-change: border, background;
		transition:
			border 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955),
			background 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);

		&:hover {
			border: 1px solid var(--color-slate-900);
		}

		&:active {
			border: 1px solid var(--color-slate-900);
		}
	}

	.input--type--number {
		width: inherit;
		border: 1rem solid var(--color-slate-500);
		border-radius: 4rem !important;
		font-family: var(--font-family), sans-serif;
		font-weight: 700;
		font-size: 18rem;
		line-height: 125%;
		color: var(--color-slate-900);
		padding: 12.5rem 0;
		position: relative;
		will-change: border, background;
		transition:
			border 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955),
			background 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
		-moz-appearance: textfield;

		&::-webkit-outer-spin-button,
		&::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}

		&:hover {
			border: 1px solid var(--color-slate-900);
		}

		&:active {
			border: 1px solid var(--color-slate-900);
		}
	}

	.input__label {
		display: flex;
		align-items: center;
		justify-content: center;
		will-change: color;
		transition: color 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
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
</style>
