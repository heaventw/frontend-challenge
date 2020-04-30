import React from "react";
import PropTypes from "prop-types";
import { StyledInput } from "./styled";

export const Input = ({ type, onChange, placeholder, value }) => (
  <StyledInput placeholder={placeholder} type={type} onChange={onChange} value={value} />
);

Input.propTypes = {
  type: PropTypes.oneOf(["text", "email", "tel", "file", "number", "password"]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object])
};

Input.defaultProps = {
  type: "text"
};

export default Input;
