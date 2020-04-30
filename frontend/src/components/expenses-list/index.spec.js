import React from 'react';
import { shallow } from 'enzyme';
import ExpensesList from '.';
import Expense from '../expense';
import ExpenseDetails from '../../containers/expense-details';
import Spinner from '../spinner';

import mockExpenses from '../../api/expenses.mock';
import { groupExpensesByMonthYear } from '../../store/expenses/selects';

const props = {
  fetchExpenses: () => {},
  expenses: groupExpensesByMonthYear(mockExpenses)
};

describe('Expenses List', () => {
  it('Renders a list with expenses', () => {
    const list = shallow(<ExpensesList {...props} />);
    expect(list.find(Expense).length).toBe(mockExpenses.length);
  });

  it('Renders a spinner while loading', () => {
    const list = shallow(<ExpensesList {...props} isLoading />);
    expect(list.find(Expense).length).toBe(0);
    expect(list.find(Spinner).length).toBe(1);
  });

  it('Renders the expense details if an expense is selected', () => {
    const list = shallow(
      <ExpensesList {...props} selectedExpenseId={mockExpenses[0].id} />
    );
    expect(list.find(ExpenseDetails).length).toBe(1);
  });
});
