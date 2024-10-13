export const validateMortgageAmount = (value: string) => {
	if (!value.trim()) {
		return "This field is required";
	}
	if (!/^(\d+(,\d+)*)?(\.\d+)?$/.test(value)) {
		return "Only positive numbers are allowed";
	}
	return "";
};

export const validateMortgageTerm = (value: string) => {
	if (!value.trim()) {
		return "This field is required";
	}
	if (!/^\d+(\.\d{1,2})?$/.test(value)) {
		return "Only positive numbers are allowed";
	}
	return "";
};

export const validateInterestRate = (value: string) => {
	if (!value.trim()) {
		return "This field is required.";
	}

	if (!/^\d+(,\d{3})*(\.\d{1,2})?$/.test(value)) {
		return "Only positive numbers are allowed.";
	}

	return "";
};

export const validateMortgageType = (value: string) => {
	return value ? "" : "This field is required";
};

export const isNumericString = (value: string) => {
	return /^(\d+(,\d+)*)?(\.\d+)?$/.test(value);
};
