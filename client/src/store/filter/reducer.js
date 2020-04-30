import { CHANGE_FILTER } from "./actions";

export const initialState = {
  search: "",
  currency: ""
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER:
      return {
        ...state,
        [payload.key]: payload.value
      };
    default:
      return state;
  }
};

export default reducer;
