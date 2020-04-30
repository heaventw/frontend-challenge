import React from 'react';
import { MdSearch as SearchIcon } from 'react-icons/md';
import { injectIntl } from 'react-intl';
import Input from '../input';

const Search = ({ intl, search }) => {
  const placeholder = intl.formatMessage({
    id: 'search'
  });
  return (
    <Input
      id="search"
      type="search"
      label={placeholder}
      onChange={e => search({ text: e.target.value })}
      prefixIcon={<SearchIcon className="search__icon" aria-hidden="true" />}
    />
  );
};

export default injectIntl(Search);
