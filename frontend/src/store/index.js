import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { fork, all } from 'redux-saga/effects';
import expensesSaga from './expenses/sagas';
import expensesReducer from './expenses';
import globalReducer from './global';

const rootReducer = combineReducers({
  expenses: expensesReducer,
  global: globalReducer
});

const sagas = [expensesSaga];

function* rootSaga() {
  yield all(sagas.map(fork));
}

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  (process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
