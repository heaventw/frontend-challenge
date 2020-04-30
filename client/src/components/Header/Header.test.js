import React from "react";
import { mountWithRedux, withReactIntl } from "../../helpers/testHelpers";
import Header from "./index";

const setup = () => mountWithRedux(withReactIntl(<Header />));

describe("Header", () => {
  it("should represent logo text", () => {
    const { holder } = setup();

    expect(holder.find('div[data-text="logo"]').text()).toBe("Expenses");
  });

  it("should represent SelectLanguage select", () => {
    const { holder } = setup();

    expect(holder.find("SelectLanguage")).toHaveLength(1);
  });
});
