import { FETCH_EXPENSES_REQUEST, FETCH_EXPENSES_ERROR, FETCH_EXPENSES_SUCCESS } from "./actions";

export const initialState = {
  expenses: [],
  loading: false,
  error: null,
  loaded: false,
  total: 0
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_EXPENSES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_EXPENSES_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case FETCH_EXPENSES_SUCCESS:
      return {
        ...state,
        expenses: [...state.expenses, ...payload.expenses],
        total: payload.total,
        loaded: true,
        error: null,
        loading: false
      };

    default:
      return state;
  }
};

export default reducer;
