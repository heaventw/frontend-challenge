import { call, put, takeEvery, all } from "redux-saga/effects";
import { UPDATE_EXPENSE, UPDATE_EXPENSE_ERROR, UPDATE_EXPENSE_REQUEST, UPDATE_EXPENSE_SUCCESS } from "./actions";
import { apiUpdateExpense, apiUpdateExpenseReceipts } from "../../api";

export function* updateExpensesSaga({ payload: { id, comment, category, files } }) {
  yield put({ type: UPDATE_EXPENSE_REQUEST });

  const calls = [call(apiUpdateExpense, { id, data: { comment, category } })];

  if (files) {
    calls.push(call(apiUpdateExpenseReceipts, { id, files }));
  }

  try {
    const [{ data }, filesData] = yield all(calls);
    const expense = {
      ...data,
      receipts: !!filesData ? filesData.data.receipts : data.receipts
    };
    yield put({ type: UPDATE_EXPENSE_SUCCESS, payload: expense });
  } catch (e) {
    yield put({ type: UPDATE_EXPENSE_ERROR, payload: e.message });
  }
}

export default function* editExpensesSaga() {
  yield takeEvery(UPDATE_EXPENSE, updateExpensesSaga);
}
