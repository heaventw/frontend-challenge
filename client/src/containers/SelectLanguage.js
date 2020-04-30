import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import SelectLang from "../components/SelectLang";
import { changeLocale } from "../store/settings/actions";
import { selectLocale } from "../store/settings/selectors";

const mapStateToProps = createStructuredSelector({
  locale: selectLocale
});

const mapDispatchToProps = {
  onChange: changeLocale
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectLang);
