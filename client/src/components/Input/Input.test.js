import React from "react";
import { mount } from "enzyme";
import Input from "./index";

const onChange = () => {};

const setup = props => mount(<Input onChange={onChange} {...props} />);

describe("Input component", () => {
  it("should represent input", () => {
    const holder = setup();

    expect(holder.find("input").length).toBe(1);
  });

  it("should have type text by default", () => {
    const holder = setup();

    expect(holder.find("input").prop("type")).toBe("text");
  });

  it("should represent custom type", () => {
    const type = "email";
    const holder = setup({ type });

    expect(holder.find("input").prop("type")).toBe(type);
  });

  it("should have callback on change", () => {
    const onChange = jest.fn();
    const value = 123;
    const holder = setup({ onChange });

    holder.find("input").simulate("change", value);
    expect(onChange).toHaveBeenCalled();
  });

  it("should represent placeholder", () => {
    const placeholder = "Placeholder";
    const holder = setup({ placeholder });

    expect(holder.find("input").prop("placeholder")).toBe(placeholder);
  });

  it("should represent value", () => {
    const value = 123;
    const holder = setup({ value });

    expect(holder.find("input").prop("value")).toBe(value);
  });
});
