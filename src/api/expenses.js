import axios from 'axios';

export default {
  getExpenses: (limit = 25, offset = 0) => axios.get(`/expenses?limit=${limit}&offset=${offset}`),
  checkInvitationHash: hash => axios.get(`/users/invite/${hash}`),
  setComment({ id, comment }) {
    return axios.post(`/expenses/${id}`, { comment });
  },
  postReceipts: id => axios.post(`/${id}/receipts`),
};
