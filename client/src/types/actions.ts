import { Expense } from "./Expense";

export const FETCH_EXPENSES = "FETCH_EXPENSES";

export interface FetchExpensesAction {
  type: typeof FETCH_EXPENSES;
  payload: {
    expenses: Expense[];
    total: number;
  }
}

export type ExpenseActionTypes = FetchExpensesAction

export type AppActions = ExpenseActionTypes | FetchExpensesAction;