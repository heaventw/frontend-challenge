/**
 * Action creator helper
 * @param {String} type - action type
 * @param {*} payload - payload data
 * @example
 * // const action = createAction('TYPE');
 * @return {Function} - return action creator function
 */
export const createAction = type => payload => ({ type, payload });
