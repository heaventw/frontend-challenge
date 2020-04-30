import React from 'react';
import { injectIntl } from 'react-intl';
import './index.scss';

const LocaleSwitcher = ({ intl, locales, selectedLocale, onChange }) => {
  const label = intl.formatMessage({
    id: 'select_locale'
  });
  return (
    <select
      className="locales-select"
      aria-label={label}
      defaultValue={selectedLocale}
      onChange={e => onChange(e.target.value)}
    >
      {locales.map(l => (
        <option key={l} value={l}>
          {l}
        </option>
      ))}
    </select>
  );
};

export default injectIntl(LocaleSwitcher);
