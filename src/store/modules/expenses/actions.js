import ExpensesService from '@/api/expenses';
import { LIST_EXPENSES, SEARCH_EXPENSES, SET_PAGE, SET_EXPENSE } from '../../mutation-types';

export default {
  getExpenses: ({ commit, state }, page = 0) => {
    let offset = null;
    let limit = null;
    if (page < 0) {
      offset = 0;
      limit = -25 * (page - 1);
    } else {
      offset = page * 25;
      limit = 25;
    }

    ExpensesService.getExpenses(limit, offset).then(({ data }) => {
      commit(LIST_EXPENSES, page > 0 ? state.expenses.concat(data.expenses) : data.expenses);
      commit(SET_PAGE, Math.abs(page));
    });
  },

  searchExpenses: ({ commit, state }, search) => {
    const expenses =
      search != ''
        ? state.expenses.filter(
            item =>
              (item.user.first.toLowerCase().indexOf(search.toLowerCase()) &&
                item.user.last.toLowerCase().indexOf(search.toLowerCase()) &&
                item.amount.currency.toLowerCase().indexOf(search.toLowerCase()) &&
                item.merchant.toLowerCase().indexOf(search.toLowerCase()) &&
                item.comment.toLowerCase().indexOf(search.toLowerCase()) &&
                item.category.toLowerCase().indexOf(search.toLowerCase())) !== -1,
          )
        : [];
    commit(SEARCH_EXPENSES, expenses);
  },

  setExpense: ({ commit, state }, id) => {
    const expense = id ? state.expenses.filter(item => item.id === id)[0] : state.expenses[0];
    if (expense) {
      commit(SET_EXPENSE, expense);
    }
  },

  setExpenseAfterUpload: async ({ commit, state, dispatch }, expense) => {
    await dispatch('getExpenses', state.page * -1);
    commit(SET_EXPENSE, expense);
  },

  setComment: async ({ commit, dispatch, state }, commentCreated) => {
    await ExpensesService.setComment(commentCreated).then(({ data }) => {
      dispatch('getExpenses', state.page * -1);
      commit(SET_EXPENSE, data);
    });
  },
};
