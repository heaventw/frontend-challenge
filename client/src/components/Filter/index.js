/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import PropTypes from "prop-types";
import { injectIntl } from "react-intl";
import { IntlPropType, SelectOptionPropType } from "../../constants";
import { StyledInput } from "../Input/styled";
import Select from "../Select";
import { StyledFilter, StyledInputWrap } from "./styled";

const Filter = ({ currencies, currency, category, search, changeFilterValue, intl }) => {
  const isCurrenciesDisabled = currencies.length === 0;
  const categoriesOptions = [
    { value: "food", label: intl.formatMessage({ id: "categories.food" }) },
    { value: "software", label: intl.formatMessage({ id: "categories.software" }) },
    { value: "travel", label: intl.formatMessage({ id: "categories.travel" }) }
  ];

  return (
    <StyledFilter>
      <StyledInputWrap isFullWidth>
        <StyledInput
          name="search"
          defaultValue={search}
          placeholder={intl.formatMessage({ id: "general.search" })}
          onChange={e => changeFilterValue({ key: "search", value: e.target.value })}
        />
      </StyledInputWrap>
      <StyledInputWrap>
        <Select
          name="currency"
          disabled={isCurrenciesDisabled}
          options={currencies}
          placeholder={intl.formatMessage({ id: "general.currency" })}
          onChange={e => changeFilterValue({ key: "currency", value: e.target.value })}
          value={currency}
        />
      </StyledInputWrap>
      <StyledInputWrap>
        <Select
          name="category"
          placeholder={intl.formatMessage({ id: "general.select_category" })}
          onChange={e => changeFilterValue({ key: "category", value: e.target.value })}
          value={category}
          options={categoriesOptions}
        />
      </StyledInputWrap>
    </StyledFilter>
  );
};

Filter.propTypes = {
  intl: IntlPropType,
  currencies: PropTypes.arrayOf(SelectOptionPropType),
  changeFilterValue: PropTypes.func.isRequired,
  currency: PropTypes.string
};

Filter.defaultProps = {
  currencies: [],
  currency: ""
};

export default injectIntl(Filter);
