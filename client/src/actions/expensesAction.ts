import { Expense } from "../types/Expense";
import {
  FETCH_EXPENSES,
  AppActions
} from "../types/actions";
import { Dispatch } from "redux";
import { AppState } from "../store";

export const fetchExpenses = (expenses: Expense[], total: number): AppActions => ({
  type: FETCH_EXPENSES,
  payload: {
    expenses, total
  }
});

export const startFetchExpenses = (
  page?: number
) => {
  return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    let limit = 25,
      offset;
    if (page === undefined) {
      offset = 0;
    } else {
      offset = page * 25;
    }
    const response = await fetch(
      `http://localhost:3000/expenses?limit=${limit}&offset=${offset}`
    );
    const expenses = await response.json();
    dispatch(fetchExpenses(expenses.expenses, expenses.total));
  };
};


