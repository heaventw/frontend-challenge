import { select } from "redux-saga/effects";
import { expectSaga, testSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";
import { apiGetExpenses } from "../../api";
import expensesSaga, { loadExpensesSaga } from "./saga";
import { FETCH_EXPENSES_REQUEST, FETCH_EXPENSES_ERROR, FETCH_EXPENSES_SUCCESS, FETCH_EXPENSES } from "./actions";
import { selectExpensesOffset } from "./selectors";

jest.mock("../../api", () => ({
  apiGetExpenses: jest.fn().mockImplementation(offset => ({
    data: {
      expenses: [1, 2, 3],
      total: offset + 1
    }
  }))
}));

const offset = 100;

describe("loadExpensesSaga", () => {
  it("it should load expenses", () => {
    return expectSaga(loadExpensesSaga)
      .provide([[select(selectExpensesOffset), offset]])
      .put({ type: FETCH_EXPENSES_REQUEST })
      .put({ type: FETCH_EXPENSES_SUCCESS, payload: { expenses: [1, 2, 3], total: offset + 1 } })
      .run();
  });

  it("it should catch load expenses error", () => {
    const errorMsg = "Error message";
    const error = new Error(errorMsg);

    return expectSaga(loadExpensesSaga)
      .provide([
        [select(selectExpensesOffset), offset],
        [matchers.call.fn(apiGetExpenses), throwError(error)]
      ])
      .put({ type: FETCH_EXPENSES_REQUEST })
      .put({ type: FETCH_EXPENSES_ERROR, payload: errorMsg })
      .run();
  });
});

describe("expensesSaga", () => {
  it("should take FETCH_EXPENSES", () => {
    testSaga(expensesSaga)
      .next()
      .takeEvery(FETCH_EXPENSES, loadExpensesSaga)
      .finish()
      .isDone();
  });
});
