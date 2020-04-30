import React from "react";
import { injectIntl } from "react-intl";
import PropTypes from "prop-types";
import { IntlPropType } from "../../constants";
import Select from "../Select";

const SelectLanguage = ({ locale, onChange, intl }) => {
  const options = [
    {
      value: "en-GB",
      label: intl.formatMessage({
        id: "locale.en"
      })
    },

    {
      value: "fr-FR",
      label: intl.formatMessage({
        id: "locale.fr"
      })
    }
  ];

  return <Select value={locale} options={options} onChange={onChange} />;
};

SelectLanguage.propTypes = {
  locale: PropTypes.oneOf(["en-GB", "fr-FR"]),
  onChange: PropTypes.func.isRequired,
  intl: IntlPropType
};

export default injectIntl(SelectLanguage);
