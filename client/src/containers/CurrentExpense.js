import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CurrentExpense from "../components/CurrentExpense";
import { selectCurrentExpense } from "../store/expenses/selectors";
import { updateExpense, resetExpenseId } from "../store/editExpense/actions";
import { selectCurrentExpenseError, selectCurrentExpenseSuccessMessage } from "../store/editExpense/selectors";

const mapStateToProps = createStructuredSelector({
  expense: selectCurrentExpense,
  error: selectCurrentExpenseError,
  showSuccessMessage: selectCurrentExpenseSuccessMessage
});

const mapDispatchToProps = {
  updateExpense,
  resetExpenseId
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentExpense);
