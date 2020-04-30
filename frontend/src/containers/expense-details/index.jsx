import { connect } from 'react-redux';
import {
  selectExpense,
  postComment,
  uploadFile
} from '../../store/expenses/actions';
import {
  selectSelectedExpense,
  selectIsPostingComment,
  selectIsUploadingFile
} from '../../store/expenses/selects';
import ExpenseDetails from '../../components/expense-details';

const mapStateToProps = state => ({
  expense: selectSelectedExpense(state),
  isPostingComment: selectIsPostingComment(state),
  isUploadingFile: selectIsUploadingFile(state)
});

const mapDispatchToProps = {
  selectExpense,
  postComment,
  uploadFile
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseDetails);
