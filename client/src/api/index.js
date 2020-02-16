import axios from "axios";
import { API_URL, DEFAULT_EXPENSES_LIMIT } from "../constants";

export const apiGetExpenses = (offset = 0, limit = DEFAULT_EXPENSES_LIMIT) =>
  axios.get(`${API_URL}?offset=${offset}&limit=${limit}`);

export const apiUpdateExpense = async (id, data) => await axios.post(`${API_URL}/${id}`, data);
