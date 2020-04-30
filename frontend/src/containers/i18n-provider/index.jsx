import { connect } from 'react-redux';
import { selectLocale } from '../../store/global/selects';
import IntlProvider from '../../components/i18n-provider';

const mapStateToProps = state => ({
  locale: selectLocale(state)
});

export default connect(mapStateToProps, null)(IntlProvider);
