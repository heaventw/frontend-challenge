const env = process.env.NODE_ENV || 'development';
const isProd = env === 'production';
export const API_URL = isProd
  ? 'https://pleo-api.herokuapp.com'
  : '//localhost:3000';
const DEFAULT_EXPENSES_LIMIT = 20;

export const fetchExpenses = (offset = 0, limit = DEFAULT_EXPENSES_LIMIT) =>
  fetch(`${API_URL}/expenses?offset=${offset}&limit=${limit}`).then(
    response => {
      return response.json();
    }
  );

export const postExpenseComment = ({ id, comment }) =>
  fetch(`${API_URL}/expenses/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ comment })
  }).then(response => {
    return response.json();
  });

export const uploadFile = ({ expenseId, file }) => {
  const formData = new FormData();
  formData.append('receipt', file);
  return fetch(`${API_URL}/expenses/${expenseId}/receipts`, {
    method: 'POST',
    body: formData
  }).then(response => {
    return response.json();
  });
};
