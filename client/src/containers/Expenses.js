import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import ExpensesList from "../components/ExpensesList";
import {
  selectFilteredExpenses,
  selectIsShowError,
  selectIsShowLoadMore,
  selectIsShowNoItems,
  selectIsAllLoaded,
  selectIsLoading
} from "../store/expenses/selectors";
import { fetchExpenses } from "../store/expenses/actions";
import { setExpenseId } from "../store/editExpense/actions";

const mapStateToProps = createStructuredSelector({
  expenses: selectFilteredExpenses,
  isLoadMore: selectIsShowLoadMore,
  isShowError: selectIsShowError,
  isAllLoaded: selectIsAllLoaded,
  isShowNoItems: selectIsShowNoItems,
  isLoading: selectIsLoading
});

const mapDispatchToProps = {
  fetchExpenses,
  setExpenseId
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesList);
