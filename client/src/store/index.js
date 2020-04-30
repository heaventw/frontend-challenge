import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { fork, all } from "redux-saga/effects";
import expenses from "./expenses/reducer";
import settings from "./settings/reducer";
import editExpense from "./editExpense/reducer";
import filter from "./filter/reducer";
import expensesSaga from "./expenses/saga";
import editExpensesSaga from "./editExpense/saga";

const sagas = [expensesSaga, editExpensesSaga];

function* rootSaga() {
  yield all(sagas.map(fork));
}

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
  (process.env.NODE_ENV !== "production" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

export const rootReducer = combineReducers({
  expenses,
  editExpense,
  settings,
  filter
});

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
