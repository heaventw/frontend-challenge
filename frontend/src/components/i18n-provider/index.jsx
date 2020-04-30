import React from 'react';
import { IntlProvider as Provider } from 'react-intl';
import { locales as messages } from '../../i18n';

export default ({ locale, children }) => (
  <Provider locale={locale} messages={messages[locale]}>
    {children}
  </Provider>
);
