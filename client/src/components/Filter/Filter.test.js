import React from "react";
import { mount } from "enzyme";
import { withReactIntl } from "../../helpers/testHelpers";
import Filter from "./index";

const changeFilterValue = () => {};

const setup = props => mount(withReactIntl(<Filter changeFilterValue={changeFilterValue} {...props} />));

describe("Filter", () => {
  it("should represent filter layout", () => {
    const filter = setup();

    expect(filter.find('input[name="search"]')).toHaveLength(1);
    expect(filter.find('Select[name="currency"]')).toHaveLength(1);
  });

  it("should handle search input change", () => {
    const changeFilterValue = jest.fn();
    const value = "USD";
    const event = { target: { value } };
    const filter = setup({ changeFilterValue });
    const search = filter.find('Select[name="currency"]');

    search.simulate("change", event);

    expect(changeFilterValue).toHaveBeenCalledWith({ key: "currency", value });
  });

  it("should handle search input change", () => {
    const changeFilterValue = jest.fn();
    const value = "USD";
    const event = { target: { value } };
    const filter = setup({ changeFilterValue });
    const search = filter.find('Select[name="currency"]');

    search.simulate("change", event);

    expect(changeFilterValue).toHaveBeenCalledWith({ key: "currency", value });
  });

  it("should handle category change", () => {
    const changeFilterValue = jest.fn();
    const value = "food";
    const event = { target: { value } };
    const filter = setup({ changeFilterValue });
    const search = filter.find('Select[name="category"]');

    search.simulate("change", event);

    expect(changeFilterValue).toHaveBeenCalledWith({ key: "category", value });
  });
});
