import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import { Expense } from '../../types/Expense';
import Receipts from '../../components/Receipts/Receipts';
import Comment from '../../components/Comment/Comment';
import moment from 'moment';

interface IExpensePageProps {
};

interface IExpensePageState {
  id: string,
  currentExpense?: Expense | null
}

class ExpensePage extends Component<IExpensePageProps & RouteComponentProps, IExpensePageState> {
  state: IExpensePageState = {
    id: '',
    currentExpense: null
  }

  async componentDidMount() {
    const id: string = await (this.props.match.params as any).id;
    this.setState({ id });
    this.fetchExpense(this.state.id)
  }

  fetchExpense = async (id: string) => {
    const response = await fetch(`http://localhost:3000/expenses/${id}`);
    const currentExpense = await response.json();
    this.setState({ currentExpense });
  };

  render() {
    let merchant, date, amount, userName, userEmail, receipts, comment, category;
    if (this.state.currentExpense && Object.entries(this.state.currentExpense).length > 0) {
      merchant = this.state.currentExpense.merchant;
      date = moment(this.state.currentExpense.date).format('L');
      amount = `${this.state.currentExpense.amount.value} ${this.state.currentExpense.amount.currency}`;
      userName = `${this.state.currentExpense.user.first} ${this.state.currentExpense.user.last}`;
      userEmail = this.state.currentExpense.user.email;
      receipts = this.state.currentExpense.receipts;
      comment = this.state.currentExpense.comment || '-';
      category = this.state.currentExpense.category || '-';
    }

    return (
      <>
      Expense
      <p>Date: {date}</p>
        <p>Amount: {amount}</p>
        <p>Merchant: {merchant}</p>
        <p>User: {userName}</p>
        <p>User email: {userEmail}</p>
        <div>
          Receipts:
          {receipts && receipts.length > 0 ? (
            <>
              <div>You have {receipts.length} {receipts.length === 1 ? 'receipt' : 'receipts'}</div>
              <Receipts userId={this.state.id} fetchExpense={() => this.fetchExpense(this.state.id)} />{' '} 
            </>
          ) : (
            // <></>
            <Receipts userId={this.state.id} fetchExpense={() => this.fetchExpense(this.state.id)} />
          )
          }
        </div>
        <p>Category: {category}</p>
        <div>
          Comment:
          {comment !== '-' ? (
            <>
              <div>{comment}</div>{' '}
              <Comment
                placeholder='Change comment'
                userId={this.state.id}
                fetchExpense={() => this.fetchExpense(this.state.id)}
              />{' '}
            </>
          ) : (
            <Comment
              placeholder='Add comment'
              userId={this.state.id}
              fetchExpense={() => this.fetchExpense(this.state.id)}
            />
          )}
        </div>
      </>
    )
  }
};

export default ExpensePage;
