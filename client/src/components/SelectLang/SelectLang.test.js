import React from "react";
import { mount } from "enzyme";
import { DEFAULT_LOCALE } from "../../constants";
import { withReactIntl } from "../../helpers/testHelpers";
import SelectLang from "./index";

const onChange = () => {};

const setup = (locale = DEFAULT_LOCALE) =>
  mount(withReactIntl(<SelectLang locale={locale} onChange={onChange} />, locale));

describe("SelectLang", () => {
  it("should represent Select with default props", () => {
    const wrapper = setup();
    const select = wrapper.find("Select");

    expect(select).toHaveLength(1);
    expect(select.prop("value")).toBe(DEFAULT_LOCALE);
    expect(select.prop("options")).toEqual([
      { label: "English", value: "en-GB" },
      { label: "French", value: "fr-FR" }
    ]);
  });

  it("should represent Select with locale", () => {
    const locale = "fr-FR";
    const wrapper = setup(locale);
    const select = wrapper.find("Select");

    expect(select).toHaveLength(1);
    expect(select.prop("value")).toBe(locale);
    expect(select.prop("options")).toEqual([
      { label: "Anglais", value: "en-GB" },
      { label: "Français", value: "fr-FR" }
    ]);
  });
});
