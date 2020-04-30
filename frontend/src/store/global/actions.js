export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
export const CLEAR_NOTIFICATION = 'CLEAR_NOTIFICATION';
export const SET_LOCALE = 'SET_LOCALE';

export const clearNotification = () => ({ type: CLEAR_NOTIFICATION });
export const setLocale = locale => ({ type: SET_LOCALE, payload: locale });
