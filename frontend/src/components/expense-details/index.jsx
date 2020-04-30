import React from 'react';
import { FormattedNumber, FormattedTime, injectIntl } from 'react-intl';
import {
  MdPerson as PersonIcon,
  MdMessage as MessageIcon
} from 'react-icons/md';
import { AiOutlineLoading3Quarters as Spinner } from 'react-icons/ai';
import Input from '../input';
import FileUpload from '../file-upload';
import { stringToColor } from '../../helpers';
import './index.scss';
import { API_URL } from '../../api';

const getGradient = color => ({
  background: `linear-gradient(to bottom, transparent 50%, #fff 50%),
    radial-gradient(circle closest-side, ${color}, #fff)`
});

const ExpenseDetails = ({
  intl,
  expense,
  isPostingComment,
  selectExpense,
  postComment,
  uploadFile,
  isUploadingFile,
  className
}) => {
  if (!expense) {
    return null;
  }
  const {
    id,
    amount: { value, currency },
    merchant,
    date,
    comment,
    user: { first, last, email },
    receipts
  } = expense;
  const close = intl.formatMessage({
    id: 'close'
  });
  const commentI18n = intl.formatMessage({
    id: 'comment'
  });
  const reciept = intl.formatMessage({
    id: 'reciept'
  });

  const color = stringToColor(merchant);
  return (
    <div className={`expense-details ${className}`}>
      <button
        className="expense-details__close"
        aria-label={close}
        onClick={() => selectExpense(null)}
      >
        &times;
      </button>
      <div className="expense-details__bg" style={getGradient(color)}></div>
      <div className="expense-details__logo" style={{ backgroundColor: color }}>
        {merchant.charAt(0)}
      </div>
      <h1 className="expense-details__title">{merchant.toLowerCase()}</h1>
      <p className="expense-details__amount">
        <FormattedNumber
          value={value}
          style={`currency`}
          currencyDisplay="symbol"
          currency={currency}
        />
      </p>
      <p className="expense-details__date">
        <FormattedTime
          value={new Date(date)}
          year="numeric"
          month="short"
          day="numeric"
          hour="numeric"
          minute="numeric"
        />
      </p>
      <div className="expense-details__other">
        <p className="expense-details__user">
          <PersonIcon className="expense-details__icon" />
          <a className="expense-details__user-link" href={`mailto:${email}`}>
            {first} {last}
          </a>
        </p>
        <Input
          id={`comment--${className}`}
          label={commentI18n}
          className="expense-details__comment"
          inputClassName="expense-details__comment-input"
          onChange={e => postComment({ id, comment: e.target.value })}
          defaultValue={comment}
          prefixIcon={
            <MessageIcon
              className="expense-details__icon expense-details__icon--message"
              aria-hidden="true"
            />
          }
          suffixIcon={
            isPostingComment ? (
              <Spinner className="expense-details__icon expense-details__icon--spinner" />
            ) : null
          }
        />
      </div>
      <ul className="expense-details__receipts">
        {receipts.map((r, index) => (
          <li key={r.url} className="expense-details__receipt-item">
            <img
              className="expense-details__receipt"
              src={`${API_URL}${r.url}`}
              alt={`${reciept} ${index}`}
            />
          </li>
        ))}
        <li className="expense-details__receipt-upload-item">
          <FileUpload
            className="expense-details__receipt-upload"
            isUploadingFile={isUploadingFile}
            onChange={file => uploadFile({ expenseId: id, file })}
          />
        </li>
      </ul>
    </div>
  );
};

export default injectIntl(ExpenseDetails);
