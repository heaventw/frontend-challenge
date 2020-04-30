import { connect } from 'react-redux';
import { fetchExpenses } from '../../store/expenses/actions';
import {
  selectExpenses,
  selectTotalExpensesCount,
  selectIsFetchingExpenses,
  selectIsSearchActive
} from '../../store/expenses/selects';
import Pagination from '../../components/pagination';

const mapStateToProps = state => ({
  loaded: selectExpenses(state).length,
  total: selectTotalExpensesCount(state),
  isLoading: selectIsFetchingExpenses(state),
  isVisible: !selectIsSearchActive(state)
});

const mapDispatchToProps = {
  fetchNext: fetchExpenses
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
