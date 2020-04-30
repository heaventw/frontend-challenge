import React from 'react';
import { shallow } from 'enzyme';
import Pagination from '.';

const props = {
  total: 20,
  loaded: 10,
  fetchNext: () => {},
  isVisible: true,
  isLoaded: true
};

const testIdSelector = '[data-test-id="pagination"]';

describe('Expenses List', () => {
  it('Renders a pagination', () => {
    const pagination = shallow(<Pagination {...props} />);
    expect(pagination.find(testIdSelector).length).toBe(1);
  });

  it('Doesnt render pagination when no items loaded', () => {
    const pagination = shallow(<Pagination {...props} loaded={0} />);
    expect(pagination.find(testIdSelector).length).toBe(0);
  });

  it('Doesnt render pagination when set to not visible', () => {
    const pagination = shallow(<Pagination {...props} isVisible={false} />);
    expect(pagination.find(testIdSelector).length).toBe(0);
  });
});
