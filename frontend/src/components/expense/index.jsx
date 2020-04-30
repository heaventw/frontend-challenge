import React, { useRef } from 'react';
import classnames from 'classnames';
import { FormattedNumber } from 'react-intl';
import { stringToColor, CardClickHelper } from '../../helpers';
import { Link } from 'react-router-dom';
import './index.scss';

const Expense = ({
  as: As = 'div',
  id,
  amount: { value, currency },
  merchant,
  comment,
  user: { first, last, email },
  selected
}) => {
  const classNames = classnames('expense', {
    'expense--active': selected
  });
  const color = stringToColor(merchant);
  const linkRef = useRef(null);
  // Card click helper for better A11y/SEO
  const clickHelper = new CardClickHelper(linkRef);

  return (
    <As
      className={classNames}
      onMouseUp={e => clickHelper.onMouseUp(e)}
      onMouseDown={e => clickHelper.onMouseDown(e)}
    >
      <div className="expense__container">
        <div className="expense_logo" style={{ backgroundColor: color }}>
          {merchant.charAt(0)}
        </div>
        <div className="expense__info">
          <Link
            ref={linkRef}
            to={`/expenses/${id}`}
            className="expense__merchant"
          >
            {merchant.toLowerCase()}
          </Link>
          <a className="expense__user" href={`mailto:${email}`}>
            {first} {last}
          </a>
          <p className="expense__comment">{comment}</p>
        </div>
        <div className="expense__amount">
          <FormattedNumber
            value={value}
            style={`currency`}
            currencyDisplay="symbol"
            currency={currency}
          />
        </div>
      </div>
    </As>
  );
};

export default Expense;
