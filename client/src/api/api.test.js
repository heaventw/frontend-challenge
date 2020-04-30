import { API_URL, DEFAULT_EXPENSES_LIMIT } from "../constants";
import { apiGetExpenses } from "./index";

jest.mock("axios", () => ({
  get: url => url
}));

describe("apiGetExpenses", () => {
  it("should call api with correct default params", () => {
    expect(apiGetExpenses()).toBe(`${API_URL}?offset=0&limit=${DEFAULT_EXPENSES_LIMIT}`);
  });

  it("should call api with correct custom params", () => {
    const offset = 100;
    const limit = 25;
    expect(apiGetExpenses(offset, limit)).toBe(`${API_URL}?offset=${offset}&limit=${limit}`);
  });
});
