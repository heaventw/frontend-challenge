import { createAction } from "../../helpers/common";

export const UPDATE_EXPENSE = "UPDATE_EXPENSE";
export const UPDATE_EXPENSE_REQUEST = "UPDATE_EXPENSE_REQUEST";
export const UPDATE_EXPENSE_ERROR = "UPDATE_EXPENSE_ERROR";
export const UPDATE_EXPENSE_SUCCESS = "UPDATE_EXPENSE_SUCCESS";

export const SET_CURRENT_EXPENSE = "SET_CURRENT_EXPENSE";
export const RESET_CURRENT_EXPENSE = "RESET_CURRENT_EXPENSE";

export const setExpenseId = createAction(SET_CURRENT_EXPENSE);
export const resetExpenseId = createAction(RESET_CURRENT_EXPENSE);

export const updateExpense = createAction(UPDATE_EXPENSE);
export const updateExpenseRequest = createAction(UPDATE_EXPENSE_REQUEST);
export const updateExpenseSuccess = createAction(UPDATE_EXPENSE_SUCCESS);
export const updateExpenseError = createAction(UPDATE_EXPENSE_ERROR);
