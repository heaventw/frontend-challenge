import React from 'react';
import moment from 'moment';
import getSymbolFromCurrency from 'currency-symbol-map'
import Input from '../input';
import FileUpload from '../file-upload';
import stringToColor from '../../helpers/string-to-color';
import { MdPerson as PersonIcon, MdMessage as MessageIcon } from 'react-icons/md';
import './index.scss';

const getGradient = (color) => ({
  background: `linear-gradient(to bottom, transparent 50%, #fff 50%),
    radial-gradient(circle closest-side, ${color}, #fff)`
});

export default ({
  expense,
  selectExpense
}) => {
  if (!expense) {
    return null;
  }
  const {
    amount: {
      value,
      currency
    },
    merchant,
    date,
    comment,
    user: {
      first,
      last,
      email
    }
  } = expense;
  const color = stringToColor(merchant);
  return (
    <div className='expense-details'>
      <button className='expense-details__close' aria-label='close' onClick={() => selectExpense(null)}>&times;</button>
      <div className='expense-details__bg' style={getGradient(color)}></div>
      <div className='expense-details__logo' style={{backgroundColor: color}}>
        { merchant.charAt(0) }
      </div>
      <h1 className='expense-details__title'>{merchant.toLowerCase()}</h1>
      <p className='expense-details__amount'>{getSymbolFromCurrency(currency)}{value}</p>
      <p className='expense-details__date'>{moment(date).format("dddd, MMMM Do YYYY, h:mm a")}</p>
      <div className='expense-details__other'>
        <p className='expense-details__user'>
          <PersonIcon className='expense-details__icon'/>
          <a className='expense-details__user-link' href={`mailto:${email}`}>{first} {last}</a>
        </p>
        <Input
          id='comment'
          label='Comment'
          className='expense-details__comment'
          inputClassName='expense-details__comment-input'
          icon={
            <MessageIcon className='expense-details__icon' aria-hidden='true' />
          } />
      </div>
      <FileUpload />
    </div>
  );
};