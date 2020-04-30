import { call, put, takeEvery, select } from "redux-saga/effects";
import { apiGetExpenses } from "../../api";
import { FETCH_EXPENSES, FETCH_EXPENSES_REQUEST, FETCH_EXPENSES_SUCCESS, FETCH_EXPENSES_ERROR } from "./actions";
import { selectExpensesOffset } from "./selectors";

export function* loadExpensesSaga() {
  yield put({ type: FETCH_EXPENSES_REQUEST });
  try {
    const offset = yield select(selectExpensesOffset);
    const { data } = yield call(apiGetExpenses, offset);
    yield put({ type: FETCH_EXPENSES_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: FETCH_EXPENSES_ERROR, payload: e.message });
  }
}

export default function* expensesSaga() {
  yield takeEvery(FETCH_EXPENSES, loadExpensesSaga);
}
