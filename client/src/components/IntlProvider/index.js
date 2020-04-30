import React from "react";
import PropTypes from "prop-types";
import { IntlProvider as Provider } from "react-intl";
import messages from "../../intl/messages";

const IntlProvider = ({ children, locale }) => (
  <Provider locale={locale} messages={messages[locale]}>
    {children}
  </Provider>
);

Provider.propTypes = {
  children: PropTypes.node.isRequired,
  locale: PropTypes.string.isRequired
};

export default IntlProvider;
