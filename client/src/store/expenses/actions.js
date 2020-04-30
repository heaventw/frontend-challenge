import { createAction } from "../../helpers/common";

export const FETCH_EXPENSES = "FETCH_EXPENSES";
export const FETCH_EXPENSES_REQUEST = "FETCH_EXPENSES_REQUEST";
export const FETCH_EXPENSES_ERROR = "FETCH_EXPENSES_ERROR";
export const FETCH_EXPENSES_SUCCESS = "FETCH_EXPENSES_SUCCESS";

export const fetchExpenses = createAction(FETCH_EXPENSES);
export const fetchExpensesRequest = createAction(FETCH_EXPENSES_REQUEST);
export const fetchExpensesSuccess = data => createAction(FETCH_EXPENSES_SUCCESS)(data);
export const fetchExpensesError = error => createAction(FETCH_EXPENSES_ERROR)(error);
