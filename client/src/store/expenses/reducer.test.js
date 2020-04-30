import { testReducer } from "../../helpers/testHelpers";
import { changeFilter } from "../filter/actions";
import { selectCurrentExpenseId } from "../editExpense/selectors";
import { updateExpenseSuccess, resetExpenseId, setExpenseId } from "../editExpense/actions";
import {
  selectFilteredExpenses,
  selectIsLoading,
  selectIsAllLoaded,
  selectIsShowError,
  selectTotal,
  selectIsShowLoadMore,
  selectCurrenciesOptions,
  selectIsShowNoItems,
  selectCurrentExpense
} from "./selectors";
import { expenses } from "./expenses.mock.js";
import { fetchExpensesRequest, fetchExpensesError, fetchExpensesSuccess } from "./actions";
import { initialState } from "./reducer";
import { rootReducer } from "../index";

const [exp1, exp2] = expenses;
const error = "Error Message";
const requestData = {
  expenses: [exp1],
  total: 10
};
const requestData2 = {
  expenses: [exp2],
  total: 20
};

const currencyOption1 = {
  label: exp1.amount.currency,
  value: exp1.amount.currency
};

const currencyOption2 = {
  label: exp2.amount.currency,
  value: exp2.amount.currency
};

describe("Expenses reducer test", () => {
  it("should represent initial state", () => {
    testReducer(rootReducer)
      .expect(selectFilteredExpenses, [])
      .expect(selectIsLoading, false)
      .expect(selectIsAllLoaded, false)
      .expect(selectIsShowLoadMore, false)
      .expect(selectTotal, 0);
  });

  it("should represent loading state", () => {
    testReducer(rootReducer)
      .expect(selectIsLoading, false)
      .expect(selectIsAllLoaded, false)
      .expect(selectIsShowError, false)
      .expect(selectIsShowLoadMore, false)
      .put(fetchExpensesRequest())
      .expect(selectFilteredExpenses, [])
      .expect(selectIsLoading, true)
      .expect(selectIsAllLoaded, false)
      .expect(selectIsShowError, false)
      .expect(selectIsShowLoadMore, false);
  });

  it("should represent error state", () => {
    testReducer(rootReducer)
      .expect(selectIsShowError, false)
      .put(fetchExpensesError(error))
      .expect(selectIsShowError, true)
      .expect(selectFilteredExpenses, [])
      .expect(selectIsLoading, false)
      .expect(selectIsAllLoaded, false)
      .expect(selectIsShowLoadMore, false)
      .expect(selectTotal, 0);
  });

  it("should represent success loaded state", () => {
    testReducer(rootReducer, { expenses: initialState })
      // add error
      .put(fetchExpensesError(error))
      .expect(selectIsShowError, true)
      // add loading
      .put(fetchExpensesRequest())
      .expect(selectIsLoading, true)
      .put(fetchExpensesSuccess(requestData))
      .expect(selectFilteredExpenses, [exp1])
      .expect(selectIsLoading, false)
      .expect(selectIsShowError, false)
      .expect(selectTotal, requestData.total)
      .expect(selectIsShowLoadMore, true)
      // should add loaded expenses to already existed
      .put(fetchExpensesSuccess(requestData2))
      .expect(selectFilteredExpenses, [...initialState.expenses, ...expenses])
      .expect(selectTotal, requestData2.total);
  });

  it("should represent correct loaded state", () => {
    const total = 2;
    testReducer(rootReducer, { expenses: initialState })
      .expect(selectIsShowLoadMore, false)
      .expect(selectIsAllLoaded, false)
      .expect(selectIsShowNoItems, false)
      .put(fetchExpensesSuccess({ expenses: [], total }))
      .expect(selectIsShowNoItems, true)
      .put(fetchExpensesSuccess({ expenses: [exp1], total }))
      .expect(selectIsAllLoaded, false)
      .expect(selectIsShowLoadMore, true)
      .expect(selectIsShowNoItems, false)
      .put(fetchExpensesSuccess({ expenses: [exp2], total }))
      .expect(selectIsAllLoaded, true)
      .expect(selectIsShowLoadMore, false)
      .expect(selectIsShowNoItems, false);
  });

  it("should represent unique expenses currency options", () => {
    testReducer(rootReducer)
      .expect(selectCurrenciesOptions, [])
      .put(fetchExpensesSuccess(requestData))
      .expect(selectCurrenciesOptions, [currencyOption1])
      .put(fetchExpensesSuccess(requestData2))
      .expect(selectCurrenciesOptions, [currencyOption1, currencyOption2])
      // should not duplicate currency
      .put(fetchExpensesSuccess(requestData))
      .expect(selectCurrenciesOptions, [currencyOption1, currencyOption2]);
  });

  it("should represent filtered expenses", () => {
    testReducer(rootReducer)
      .expect(selectFilteredExpenses, [])
      .put(fetchExpensesSuccess(requestData))
      .put(fetchExpensesSuccess(requestData2))
      .expect(selectFilteredExpenses, expenses)
      .put(changeFilter({ key: "search", value: exp1.user.first }))
      .expect(selectFilteredExpenses, [exp1])
      .put(changeFilter({ key: "search", value: "" }))
      .expect(selectFilteredExpenses, expenses)
      .put(changeFilter({ key: "currency", value: exp1.amount.currency }))
      .expect(selectFilteredExpenses, [exp1]);
  });

  it("should set current and reset expense", () => {
    const { id } = exp1;
    testReducer(rootReducer)
      .expect(selectCurrentExpenseId, null)
      .expect(selectCurrentExpense, {})
      .put(fetchExpensesSuccess(requestData))
      .expect(selectCurrentExpenseId, null)
      .expect(selectCurrentExpense, {})
      .put(setExpenseId(id))
      .expect(selectCurrentExpenseId, id)
      .expect(selectCurrentExpense, exp1)
      .put(resetExpenseId())
      .expect(selectCurrentExpense, {})
      .expect(selectCurrentExpenseId, null);
  });

  it("should update expense", () => {
    const updatedExpense = { ...exp1, comment: "New comment" };
    testReducer(rootReducer)
      .put(fetchExpensesSuccess(requestData))
      .put(fetchExpensesSuccess(requestData2))
      .expect(selectFilteredExpenses, [exp1, exp2])
      .put(updateExpenseSuccess(updatedExpense))
      .expect(selectFilteredExpenses, [updatedExpense, exp2]);
  });
});
