import {
  EXPENSES_FETCHED,
  EXPENSES_FETCHING,
  EXPENSE_SELECTED,
  COMMENT_POSTED,
  COMMENT_POSTING,
  FILE_UPLOADED,
  FILE_UPLOADING,
  FILTER_BY_TEXT
} from './actions';

const initialState = {
  expenses: [],
  selectedExpenseId: null,
  isUploadingFile: false
};

const replaceExpense = (expenses, expense) =>
  expenses.map(e => {
    if (e.id === expense.id) {
      return expense;
    }
    return e;
  });

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case EXPENSES_FETCHED:
      return {
        ...state,
        expenses: [...state.expenses, ...payload.expenses],
        total: payload.total,
        isFetching: false
      };
    case EXPENSES_FETCHING: {
      return {
        ...state,
        isFetching: payload
      };
    }
    case EXPENSE_SELECTED: {
      return {
        ...state,
        selectedExpenseId: payload
      };
    }
    case COMMENT_POSTED: {
      return {
        ...state,
        expenses: replaceExpense([...state.expenses], payload),
        isPostingComment: false
      };
    }
    case COMMENT_POSTING: {
      return {
        ...state,
        isPostingComment: payload
      };
    }
    case FILE_UPLOADING: {
      return {
        ...state,
        isUploadingFile: payload
      };
    }
    case FILE_UPLOADED: {
      return {
        ...state,
        expenses: replaceExpense([...state.expenses], payload),
        isUploadingFile: false
      };
    }
    case FILTER_BY_TEXT: {
      const isSearchActive = !!payload.text;
      const searchTerm = payload.text.toLowerCase();
      const filteredExpenses = state.expenses.filter(
        ({
          amount: { value },
          merchant,
          comment,
          user: { first, last, email }
        }) =>
          merchant.toLowerCase().indexOf(searchTerm) > -1 ||
          `${first} ${last}`.toLowerCase().indexOf(searchTerm) > -1 ||
          comment.toLowerCase().indexOf(searchTerm) > -1 ||
          email.indexOf(searchTerm) > -1 ||
          value.indexOf(searchTerm) > -1
      );
      return {
        ...state,
        isSearchActive,
        filteredExpenses: filteredExpenses
      };
    }
    default:
      return state;
  }
};
