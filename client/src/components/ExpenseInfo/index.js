import React from "react";
import { FormattedTime } from "react-intl";
import { expensePropTypes } from "../../constants";
import { Text, StyledRow } from "../UI/styled";

const dateFormatOptions = { year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric" };

const ExpenseInfo = ({ expense: { merchant, amount, user, date } }) => {
  return (
    <>
      <StyledRow>
        <Text data-test="merchant" bold>
          {merchant}
        </Text>
        <Text data-test="amount">
          {amount.value} {amount.currency}
        </Text>
      </StyledRow>
      <StyledRow>
        <Text small data-test="user">
          {user.first} {user.last}
        </Text>
        <Text small data-test="date">
          <FormattedTime value={new Date(date)} {...dateFormatOptions} />
        </Text>
      </StyledRow>
    </>
  );
};

ExpenseInfo.propTypes = {
  expense: expensePropTypes
};
ExpenseInfo.defaultProps = {
  expense: {}
};

export default ExpenseInfo;
