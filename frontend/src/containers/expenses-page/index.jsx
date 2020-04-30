import { connect } from 'react-redux';
import { selectExpense } from '../../store/expenses/actions';
import ExpensesPage from '../../components/expenses-page';

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  selectExpense
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesPage);
