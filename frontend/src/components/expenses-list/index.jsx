import React, { useEffect } from 'react';
import { FormattedDate } from 'react-intl';
import Expense from '../expense';
import ExpenseDetails from '../../containers/expense-details';
import Spinner from '../spinner';
import './index.scss';

export default ({
  expenses = {},
  selectedExpenseId,
  fetchExpenses,
  isLoading
}) => {
  useEffect(() => {
    fetchExpenses();
  }, [fetchExpenses]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ul className="expenses-list">
      {Object.keys(expenses).map(expensesGroupKey => (
        <li key={expensesGroupKey} className="expenses-list__period-group">
          <h3 className="expenses-list__period-group-title">
            <FormattedDate
              value={new Date(expenses[expensesGroupKey][0].date)}
              year="numeric"
              month="long"
            />
          </h3>
          <ul className="expenses-list__group-expenses">
            {expenses[expensesGroupKey].map(expense => (
              <React.Fragment key={expense.id}>
                <Expense
                  as="li"
                  {...expense}
                  selected={selectedExpenseId === expense.id}
                />
                {selectedExpenseId === expense.id ? (
                  <ExpenseDetails className="expenses-list__expense-details" />
                ) : null}
              </React.Fragment>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};
