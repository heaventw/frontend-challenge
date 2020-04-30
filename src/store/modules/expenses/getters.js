export const expenses = (state, getters) => {
  return getters.searchExpenses.length > 0 ? state.searchExpenses : state.expenses;
};
export const searchExpenses = state => state.searchExpenses;
export const expense = state => state.expense;
export const page = state => state.page;
