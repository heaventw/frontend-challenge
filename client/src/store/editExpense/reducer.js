import {
  SET_CURRENT_EXPENSE,
  RESET_CURRENT_EXPENSE,
  UPDATE_EXPENSE_REQUEST,
  UPDATE_EXPENSE_ERROR,
  UPDATE_EXPENSE_SUCCESS
} from "./actions";

export const initialState = {
  id: null,
  loading: false,
  isShowSuccessMessage: false,
  error: null
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_EXPENSE_REQUEST:
      return {
        ...state,
        loading: true,
        isShowSuccessMessage: false
      };
    case UPDATE_EXPENSE_ERROR:
      return {
        ...state,
        error: payload
      };
    case UPDATE_EXPENSE_SUCCESS:
      return {
        ...state,
        error: false,
        isShowSuccessMessage: true
      };
    case SET_CURRENT_EXPENSE:
      return {
        ...state,
        id: payload
      };
    case RESET_CURRENT_EXPENSE:
      return {
        ...state,
        id: null,
        isShowSuccessMessage: false
      };

    default:
      return state;
  }
};

export default reducer;
