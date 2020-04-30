import { createSelector } from 'reselect';

export const groupExpensesByMonthYear = expenses => {
  const res = {};
  expenses.forEach(e => {
    const date = new Date(e.date);
    const key = `${date.getFullYear()}-${date.getMonth() + 1}`;
    if (res[key]) {
      res[key].push(e);
    } else {
      res[key] = [e];
    }
  });
  return res;
};

export const selectExpenses = state => state.expenses.expenses;
export const selectFilteredExpenses = state => state.expenses.filteredExpenses;
export const selectIsFetchingExpenses = state => state.expenses.isFetching;
export const selectExpenseId = state => state.expenses.selectedExpenseId;
export const selectIsPostingComment = state => state.expenses.isPostingComment;
export const selectIsUploadingFile = state => state.expenses.isUploadingFile;
export const selectIsSearchActive = state => state.expenses.isSearchActive;
export const selectTotalExpensesCount = state => state.expenses.total;

export const selectSelectedExpense = createSelector(
  [selectExpenses, selectExpenseId],
  (expenses, selectedExpenseId) =>
    expenses.find(e => e.id === selectedExpenseId)
);

export const selectExpensesToDisplay = createSelector(
  [selectIsSearchActive, selectExpenses, selectFilteredExpenses],
  (isSearchActive, expenses, filteredExpenses) =>
    isSearchActive ? filteredExpenses : expenses
);

export const selectIsExpensesListLoading = createSelector(
  [selectExpenses, selectIsFetchingExpenses],
  (expenses, isFetching) => !expenses.length && isFetching
);

export const selectExpensesGroupedByPeriod = createSelector(
  [selectExpensesToDisplay],
  groupExpensesByMonthYear
);
