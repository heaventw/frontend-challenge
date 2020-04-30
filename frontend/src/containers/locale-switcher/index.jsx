import { connect } from 'react-redux';
import { setLocale } from '../../store/global/actions';
import { selectLocale } from '../../store/global/selects';
import { locales } from '../../i18n';
import LocaleSwitcher from '../../components/locale-switcher';

const mapStateToProps = state => ({
  selectedLocale: selectLocale(state),
  locales: Object.keys(locales)
});

const mapDispatchToProps = {
  onChange: setLocale
};

export default connect(mapStateToProps, mapDispatchToProps)(LocaleSwitcher);
