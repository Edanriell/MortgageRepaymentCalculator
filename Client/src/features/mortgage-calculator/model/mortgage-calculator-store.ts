import { defineStore } from "pinia";

export const useMortgageCalculatorStore = defineStore("mortgageCalculator", {
	state: () => ({
		mortgageAmount: "",
		mortgageTerm: "",
		interestRate: "",
		mortgageType: ""
	}),
	actions: {
		setMortgageAmount(amount: string) {
			this.mortgageAmount = amount;
		},
		setMortgageTerm(term: string) {
			this.mortgageTerm = term;
		},
		setInterestRate(rate: string) {
			this.interestRate = rate;
		},
		setMortgageType(type: string) {
			this.mortgageType = type;
		}
	}
});
