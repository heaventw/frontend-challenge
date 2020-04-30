export const FETCH_EXPENSES = 'FETCH_EXPENSES';
export const EXPENSES_FETCHED = 'EXPENSES_FETCHED';
export const EXPENSES_FETCHING = 'EXPENSES_FETCHING';
export const EXPENSE_SELECTED = 'EXPENSE_SELECTED';
export const POST_COMMENT = 'POST_COMMENT';
export const COMMENT_POSTING = 'COMMENT_POSTING';
export const COMMENT_POSTED = 'COMMENT_POSTED';
export const UPLOAD_FILE = 'UPLOAD_FILE';
export const FILE_UPLOADING = 'FILE_UPLOADING';
export const FILE_UPLOADED = 'FILE_UPLOADED';
export const FILTER_BY_TEXT = 'FILTER_BY_TEXT';

export const fetchExpenses = (offset = 0) => ({
  type: FETCH_EXPENSES,
  payload: { offset }
});
export const selectExpense = (id = null) => ({
  type: EXPENSE_SELECTED,
  payload: id
});
export const postComment = ({ id, comment }) => ({
  type: POST_COMMENT,
  payload: { id, comment }
});
export const uploadFile = ({ expenseId, file }) => ({
  type: UPLOAD_FILE,
  payload: { expenseId, file }
});
export const filterByText = ({ text }) => ({
  type: FILTER_BY_TEXT,
  payload: { text }
});
