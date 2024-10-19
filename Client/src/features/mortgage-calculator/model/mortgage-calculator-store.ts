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
		},
		calculateMortgage() {
			const principal = Number(this.mortgageAmount.replace(/,/g, ""));
			const rate = Number(this.interestRate) / 100 / 12;
			const payments = Number(this.mortgageTerm) * 12;

			let monthlyPayment = 0;
			let totalPayment = 0;

			if (this.mortgageType === "repayment") {
				monthlyPayment = (principal * rate) / (1 - Math.pow(1 + rate, -payments));
				totalPayment = monthlyPayment * payments;
			} else if (this.mortgageType === "interest-only") {
				monthlyPayment = principal * rate;
				totalPayment = monthlyPayment * payments + principal;
			}

			const formatter = new Intl.NumberFormat("en-GB", {
				style: "currency",
				currency: "GBP",
				minimumFractionDigits: 2,
				maximumFractionDigits: 2
			});

			return {
				monthlyPayment: formatter.format(monthlyPayment),
				totalPayment: formatter.format(totalPayment)
			};
		}
	}
});
