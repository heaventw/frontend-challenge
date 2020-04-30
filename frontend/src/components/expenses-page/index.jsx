import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Expenses from '../../containers/expenses-list';
import Pagination from '../../containers/pagination';
import ExpenseDetails from '../../containers/expense-details';
import Search from '../../containers/search';
import './index.scss';

export default ({ selectExpense }) => {
  let { id } = useParams();
  useEffect(() => {
    id && selectExpense(id);
  }, [id, selectExpense]);
  return (
    <div className="App">
      <div className="container">
        <div className="left">
          <Search />
          <Expenses />
          <Pagination />
        </div>
        <div className="right">
          <ExpenseDetails />
        </div>
      </div>
    </div>
  );
};
