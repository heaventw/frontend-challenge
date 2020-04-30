/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";
import { expensePropTypes } from "../../constants";
import { Button, ErrorText, Text, Loader, LoaderWrapper, StyledContainer } from "../UI/styled";
import ExpenseItem from "../ExpenseItem";
import { StyledExpensesList } from "./styled";

const ExpensesList = ({
  expenses,
  fetchExpenses,
  isLoadMore,
  isLoading,
  isAllLoaded,
  isShowError,
  isShowNoItems,
  setExpenseId
}) => {
  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <StyledContainer>
      <StyledExpensesList>
        {expenses.map(expense => (
          <div
            key={expense.id}
            onClick={() => {
              setExpenseId(expense.id);
            }}
          >
            <ExpenseItem expense={expense}></ExpenseItem>
          </div>
        ))}
        {isLoading && (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        )}
        {isShowError && (
          <ErrorText>
            <FormattedMessage id="messages.error" />
          </ErrorText>
        )}
        {isShowNoItems && (
          <Text align="center">
            <FormattedMessage id="general.no_results" />
          </Text>
        )}
        {isAllLoaded && (
          <Text align="center">
            <FormattedMessage id="general.all_items_loaded" />
          </Text>
        )}
        {isLoadMore && (
          <Button centered onClick={() => fetchExpenses()}>
            <FormattedMessage id="general.load_more" />
          </Button>
        )}
      </StyledExpensesList>
    </StyledContainer>
  );
};

ExpensesList.propTypes = {
  expenses: PropTypes.arrayOf(expensePropTypes),
  fetchExpenses: PropTypes.func.isRequired,
  isLoadMore: PropTypes.bool,
  isLoading: PropTypes.bool,
  isAllLoaded: PropTypes.bool,
  isShowError: PropTypes.bool,
  isShowNoItems: PropTypes.bool,
  setExpenseId: PropTypes.func
};

ExpensesList.defaultProps = {
  isLoadMore: false,
  isLoading: false,
  isAllLoaded: false,
  isShowError: false,
  isShowNoItems: false
};

export default ExpensesList;
