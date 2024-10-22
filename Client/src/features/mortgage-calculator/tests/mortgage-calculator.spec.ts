import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";

import { useMortgageCalculatorStore } from "../model";

describe("MortgageCalculatorStore", () => {
	let store: ReturnType<typeof useMortgageCalculatorStore>;

	beforeEach(() => {
		setActivePinia(createPinia());
		store = useMortgageCalculatorStore();
	});

	it("should set mortgage amount", () => {
		store.setMortgageAmount("250000");
		expect(store.mortgageAmount).toBe("250000");
	});

	it("should set mortgage term", () => {
		store.setMortgageTerm("30");
		expect(store.mortgageTerm).toBe("30");
	});

	it("should set interest rate", () => {
		store.setInterestRate("3.75");
		expect(store.interestRate).toBe("3.75");
	});

	it("should set mortgage type", () => {
		store.setMortgageType("repayment");
		expect(store.mortgageType).toBe("repayment");
	});

	it("should have a default state", () => {
		expect(store.mortgageAmount).toBe("");
		expect(store.mortgageTerm).toBe("");
		expect(store.interestRate).toBe("");
		expect(store.mortgageType).toBe("");
	});
});
