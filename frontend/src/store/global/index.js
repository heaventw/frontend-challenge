import { SHOW_NOTIFICATION, CLEAR_NOTIFICATION, SET_LOCALE } from './actions';
import { locales } from '../../i18n';

const browserLocale = navigator.language;
const locale = locales[browserLocale] ? browserLocale : Object.keys(locales)[0];

const initialState = {
  error: null,
  locale
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_NOTIFICATION:
      return {
        ...state,
        notification: {
          ...payload
        }
      };
    case CLEAR_NOTIFICATION: {
      return {
        ...state,
        notification: null
      };
    }
    case SET_LOCALE: {
      return {
        ...state,
        locale: payload
      };
    }
    default:
      return state;
  }
};
