import React from "react";
import PropTypes from "prop-types";
import { SelectOptionPropType } from "../../constants";
import { StyledSelect } from "./styled";

const Select = ({ options, value, onChange, placeholder, disabled }) => {
  return (
    <StyledSelect value={value} onChange={onChange} disabled={disabled}>
      {placeholder && <option>{placeholder}</option>}
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </StyledSelect>
  );
};

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.arrayOf(SelectOptionPropType),
  disabled: PropTypes.bool
};

Select.defaultProps = {
  options: [],
  disabled: false
};

export default Select;
