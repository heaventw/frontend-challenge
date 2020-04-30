import { connect } from 'react-redux';
import { filterByText } from '../../store/expenses/actions';
import Search from '../../components/search';

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  search: filterByText
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
