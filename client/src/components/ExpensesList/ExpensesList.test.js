import React from "react";
import { shallow } from "enzyme";
import ExpensesList from "./index";
import { expenses } from "../../store/expenses/expenses.mock";
import ExpenseItem from "../ExpenseItem";

const requiredProps = {
  fetchExpenses: () => {}
};

const setup = () => shallow(<ExpensesList {...requiredProps} expenses={expenses} />);

describe("ExpensesList", () => {
  it("should represent expenses list with correct props", () => {
    const holder = setup();
    const Expenses = holder.find(ExpenseItem);

    expect(Expenses).toHaveLength(expenses.length);

    Expenses.forEach((expense, i) => {
      expect(expense.prop("expense")).toEqual(expenses[i]);
    });
  });
});
