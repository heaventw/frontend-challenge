import { connect } from 'react-redux';
import { fetchExpenses } from '../../store/expenses/actions';
import {
  selectExpensesGroupedByPeriod,
  selectIsSearchActive,
  selectExpenseId,
  selectIsExpensesListLoading
} from '../../store/expenses/selects';
import ExpensesList from '../../components/expenses-list';

const mapStateToProps = state => {
  return {
    expenses: selectExpensesGroupedByPeriod(state),
    isSearchActive: selectIsSearchActive(state),
    isLoading: selectIsExpensesListLoading(state),
    selectedExpenseId: selectExpenseId(state)
  };
};

const mapDispatchToProps = {
  fetchExpenses
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesList);
