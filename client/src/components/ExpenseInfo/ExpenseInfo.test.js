import React from "react";
import { mount } from "enzyme";
import { expense1 } from "../../store/expenses/expenses.mock";
import { withReactIntl } from "../../helpers/testHelpers";
import ExpenseInfo from "./index";

const setup = () => mount(withReactIntl(<ExpenseInfo expense={expense1} />));

describe("ExpenseInfo", () => {
  it("should represent merchant", () => {
    const holder = setup();

    expect(holder.find('p[data-test="merchant"]').text()).toBe(expense1.merchant);
  });

  it("should represent amount", () => {
    const holder = setup();

    expect(holder.find('p[data-test="amount"]').text()).toBe(`${expense1.amount.value} ${expense1.amount.currency}`);
  });

  it("should represent user", () => {
    const holder = setup();

    expect(holder.find('p[data-test="user"]').text()).toBe(`${expense1.user.first} ${expense1.user.last}`);
  });

  it("should represent date", () => {
    const holder = setup();

    expect(holder.find('p[data-test="date"]').text()).toBe("10 Sep 2018, 05:11");
  });
});
