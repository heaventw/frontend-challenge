import { testReducer } from "../../helpers/testHelpers";
import { rootReducer } from "../index";
import { initialState } from "./reducer";
import { selectSearch, selectCurrency } from "./selectors";
import { changeFilter } from "./actions";

describe("Filter reducer test", () => {
  it("should change filter value by key", () => {
    const searchText = "search text";
    const currency = "USD";

    testReducer(rootReducer)
      .expect(selectSearch, initialState.search)
      .expect(selectCurrency, initialState.currency)
      .put(changeFilter({ key: "search", value: searchText }))
      .expect(selectSearch, searchText)
      .expect(selectCurrency, initialState.currency)
      .put(changeFilter({ key: "currency", value: currency }))
      .expect(selectSearch, searchText)
      .expect(selectCurrency, currency);
  });
});
