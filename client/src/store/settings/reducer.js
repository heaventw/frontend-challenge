import { DEFAULT_LOCALE } from "../../constants";
import { CHANGE_LOCALE } from "./actions";

export const initialState = {
  locale: DEFAULT_LOCALE
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_LOCALE:
      return {
        ...state,
        locale: payload.target.value
      };
    default:
      return state;
  }
};

export default reducer;
