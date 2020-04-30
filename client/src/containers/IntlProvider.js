import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectLocale } from "../store/settings/selectors";
import IntlProvider from "../components/IntlProvider/index";

const mapStateToProps = createStructuredSelector({
  locale: selectLocale
});

export default connect(mapStateToProps, null)(IntlProvider);
