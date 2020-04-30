import { testReducer } from "../../helpers/testHelpers";
import { rootReducer } from "../index";
import { initialState } from "./reducer";
import { selectLocale } from "./selectors";
import { changeLocale } from "./actions";

describe("Settings reducer test", () => {
  it("should represent initial state", () => {
    const event = {
      target: {
        value: "fr-FR"
      }
    };

    testReducer(rootReducer)
      .expect(selectLocale, initialState.locale)
      .put(changeLocale(event))
      .expect(selectLocale, event.target.value);
  });
});
