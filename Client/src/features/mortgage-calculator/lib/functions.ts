export const validateMortgageAmount = (value: string) => {
	if (!value.trim()) {
		return {
			isInputValid: "invalid",
			errorMessage: "This field is required"
		};
	}
	if (!/^(\d+(,\d+)*)?(\.\d+)?$/.test(value)) {
		return {
			isInputValid: "invalid",
			errorMessage: "Only positive numbers are allowed"
		};
	}
	return {
		isInputValid: "valid",
		errorMessage: ""
	};
};

export const validateMortgageTerm = (value: string) => {
	if (!value.trim()) {
		return {
			isInputValid: "invalid",
			errorMessage: "This field is required"
		};
	}
	if (!/^\d+(\.\d{1,2})?$/.test(value)) {
		return {
			isInputValid: "invalid",
			errorMessage: "Only positive numbers are allowed"
		};
	}
	return {
		isInputValid: "valid",
		errorMessage: ""
	};
};

export const validateInterestRate = (value: string) => {
	if (!value.trim()) {
		return {
			isInputValid: "invalid",
			errorMessage: "This field is required"
		};
	}

	if (!/^\d+(,\d{3})*(\.\d{1,2})?$/.test(value)) {
		return {
			isInputValid: "invalid",
			errorMessage: "Only positive numbers are allowed"
		};
	}

	return {
		isInputValid: "valid",
		errorMessage: ""
	};
};

export const validateMortgageType = (value: string) => {
	if (value) {
		return {
			isInputValid: "valid",
			errorMessage: ""
		};
	} else {
		return {
			isInputValid: "invalid",
			errorMessage: "This field is required"
		};
	}
};

export const isNumericString = (value: string) => {
	return /^(\d+(,\d+)*)?(\.\d+)?$/.test(value);
};
