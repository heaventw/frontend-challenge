import React from "react";
import { mount } from "enzyme";
import { withReactIntl } from "../../helpers/testHelpers";
import { expense1 as expense } from "../../store/expenses/expenses.mock";
import { SERVER_URL } from "../../constants";
import ExpenseInfo from "../ExpenseInfo";
import { CloseButton } from "../UI/styled";
import { StyledHeader } from "./styled";
import CurrentExpense from "./index";

const setup = props => mount(withReactIntl(<CurrentExpense {...props} />));

describe("CurrentExpense", () => {
  it("should represent initial fields state", () => {
    const holder = setup({ expense });

    expect(holder.find("FileUpload")).toHaveLength(1);
    expect(holder.find('p[data-test="success-msg"]')).toHaveLength(0);
    expect(holder.find('p[data-test="error-msg"]')).toHaveLength(0);
  });

  it("should represent StyledHeader", () => {
    const holder = setup({ expense });

    expect(holder.find(StyledHeader).text()).toEqual("Edit Expense");
  });

  it("should represent ExpenseInfo", () => {
    const holder = setup({ expense });

    expect(holder.find(ExpenseInfo).prop("expense")).toEqual(expense);
  });

  it("should represent category", () => {
    const holder = setup({ expense });
    const select = holder.find('Select[name="category"]');

    expect(holder.find('label[htmlFor="category"]').text()).toEqual("Category");
    expect(select.prop("placeholder")).toEqual("Select category");
    expect(select.prop("options")).toEqual([
      { label: "Food", value: "food" },
      { label: "Software", value: "software" },
      { label: "Travel", value: "travel" }
    ]);
    expect(select.prop("value")).toBe("");

    select.simulate("change", { target: { value: "travel" } });

    holder.update();

    expect(holder.find('Select[name="category"]').prop("value")).toBe("travel");
  });

  it("should change comment value on change", () => {
    const value = "New comment text";
    const event = { target: { value } };
    const holder = setup({ expense });

    expect(holder.find("textarea").prop("value")).toBe(expense.comment);

    holder.find("textarea").simulate("change", event);

    expect(holder.find("textarea").prop("value")).toBe(value);
  });

  it("should represent save button", () => {
    const holder = setup({ expense });

    expect(holder.find('button[data-test="save"]').text()).toBe("Save");
  });

  it("should update expense comment on save", async () => {
    const updateExpense = jest.fn();
    const holder = setup({ expense, updateExpense });

    expect(holder.find('p[data-test="success-msg"]')).toHaveLength(0);
    expect(holder.find('p[data-test="error-msg"]')).toHaveLength(0);

    holder.find("textarea").simulate("change", { target: { value: "test" } });
    holder.update();

    holder.find('button[data-test="save"]').simulate("click");

    expect(updateExpense).toHaveBeenCalledWith({ comment: "test", category: "", id: expense.id });
  });

  it("should represent error state", () => {
    const error = "Error message";
    const holder = setup({ error, expense });

    expect(holder.find('p[data-test="error-msg"]').text()).toBe(error);
  });

  it("should represent success message", () => {
    const holder = setup({ expense, showSuccessMessage: true });

    expect(holder.find('p[data-test="success-msg"]').text()).toBe("Expense was successfully saved");
  });

  it("should represent receipts", () => {
    const receipts = [{ url: "url" }, { url: "url2" }];
    const holder = setup({
      expense: {
        ...expense,
        receipts
      }
    });
    const receiptsEl = holder.find('div[data-test="receipt"]');

    expect(receiptsEl).toHaveLength(receipts.length);

    receiptsEl.forEach((receipt, i) => {
      expect(receipt.prop("style")).toEqual({ backgroundImage: `url(${SERVER_URL}${receipts[i].url})` });
    });
  });

  it("should represent modal", () => {
    const holder = setup({ expense });

    expect(holder.find("Modal")).toHaveLength(1);
  });

  it("should represent close button", () => {
    const resetExpenseId = jest.fn();
    const holder = setup({ expense, resetExpenseId });
    const closeButton = holder.find(CloseButton);

    expect(resetExpenseId).not.toHaveBeenCalled();
    expect(closeButton).toHaveLength(1);

    closeButton.simulate("click");

    expect(resetExpenseId).toHaveBeenCalled();
  });
});
