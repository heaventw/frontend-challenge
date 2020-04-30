import {
  LIST_EXPENSES,
  SEARCH_EXPENSES,
  SET_PAGE,
  SET_EXPENSE,
  SET_COMMENT,
} from '../../mutation-types';

export default {
  [LIST_EXPENSES]: (state, expenses) => {
    state.expenses = expenses;
  },
  [SEARCH_EXPENSES]: (state, expenses) => {
    state.searchExpenses = expenses;
  },
  [SET_PAGE]: (state, page) => {
    state.page = page;
  },
  [SET_EXPENSE]: (state, expense) => {
    state.expense = expense;
  },
  [SET_COMMENT]: (state, expense) => {
    state.expense = expense;
  },
};
