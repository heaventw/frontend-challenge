import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';

import {
  fetchExpenses as fetchExpensesAPI,
  postExpenseComment,
  uploadFile as uploadFileAPI
} from '../../api';

import mockExpensesData from '../../api/expenses.mock';

import { loadExpensesSaga, postCommentSaga, uploadFileSaga } from './sagas';

import {
  FETCH_EXPENSES,
  EXPENSES_FETCHED,
  EXPENSES_FETCHING,
  POST_COMMENT,
  COMMENT_POSTING,
  COMMENT_POSTED,
  UPLOAD_FILE,
  FILE_UPLOADING,
  FILE_UPLOADED
} from './actions';

import { NotificationTypes } from '../../components/notification';

import { SHOW_NOTIFICATION } from '../global/actions';

describe('loadExpensesSaga', () => {
  const action = {
    type: FETCH_EXPENSES,
    payload: {}
  };
  it('it should load expenses', () => {
    return expectSaga(loadExpensesSaga, action)
      .provide([[matchers.call.fn(fetchExpensesAPI), mockExpensesData]])
      .put({
        type: EXPENSES_FETCHING,
        payload: true
      })
      .put({
        type: EXPENSES_FETCHED,
        payload: mockExpensesData
      })
      .run();
  });

  it('it should catch fetch error', () => {
    return expectSaga(loadExpensesSaga, action)
      .provide([
        [matchers.call.fn(fetchExpensesAPI), throwError(new Error('err'))]
      ])
      .put({
        type: EXPENSES_FETCHING,
        payload: true
      })
      .put({
        type: EXPENSES_FETCHING,
        payload: false
      })
      .put({
        type: SHOW_NOTIFICATION,
        payload: {
          message: 'failed_to_fetch_expenses',
          type: NotificationTypes.ERROR
        }
      })
      .run();
  });
});

describe('postCommentSaga', () => {
  const action = {
    type: POST_COMMENT,
    payload: {}
  };
  it('it should post comment', () => {
    return expectSaga(postCommentSaga, action)
      .provide([[matchers.call.fn(postExpenseComment), mockExpensesData]])
      .put({
        type: COMMENT_POSTING,
        payload: true
      })
      .put({
        type: COMMENT_POSTED,
        payload: mockExpensesData
      })
      .run();
  });

  it('it should catch fetch error', () => {
    return expectSaga(postCommentSaga, action)
      .provide([
        [matchers.call.fn(postExpenseComment), throwError(new Error('err'))]
      ])
      .put({
        type: COMMENT_POSTING,
        payload: true
      })
      .put({
        type: COMMENT_POSTING,
        payload: false
      })
      .put({
        type: SHOW_NOTIFICATION,
        payload: {
          message: 'failed_to_post_comment',
          type: NotificationTypes.ERROR
        }
      })
      .run();
  });
});

describe('uploadFileSaga', () => {
  const action = {
    type: UPLOAD_FILE,
    payload: {}
  };
  it('it should upload a file', () => {
    return expectSaga(uploadFileSaga, action)
      .provide([[matchers.call.fn(uploadFileAPI), mockExpensesData]])
      .put({
        type: FILE_UPLOADING,
        payload: true
      })
      .put({
        type: FILE_UPLOADED,
        payload: mockExpensesData
      })
      .run();
  });

  it('it should catch fetch error', () => {
    return expectSaga(uploadFileSaga, action)
      .provide([
        [matchers.call.fn(uploadFileSaga), throwError(new Error('err'))]
      ])
      .put({
        type: FILE_UPLOADING,
        payload: true
      })
      .put({
        type: FILE_UPLOADING,
        payload: false
      })
      .put({
        type: SHOW_NOTIFICATION,
        payload: {
          message: 'failed_to_upload_file',
          type: NotificationTypes.ERROR
        }
      })
      .run();
  });
});
