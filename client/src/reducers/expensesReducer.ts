import { Expense } from "../types/Expense";
import { FETCH_EXPENSES, ExpenseActionTypes } from '../types/actions';

const expensesReducerDefaultState: { expenses: Expense[], total: number } = { expenses: [], total: 0 };

const expensesReducer = (
  state = expensesReducerDefaultState,
  action: ExpenseActionTypes
): {} => {
  switch (action.type) {
    case FETCH_EXPENSES:
      return action.payload;
    default:
      return state;
  }
};

export { expensesReducer };
