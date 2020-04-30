import React, { Component } from 'react';

interface ICommentProps {
  placeholder: string
  userId: string,
  fetchExpense(): void;
};

interface ICommentState {
  comment: string
};

class Comment extends Component<ICommentProps, ICommentState> {
  constructor(props: any) {
    super(props);
    this.state = {
      comment: ''
    };
  }

  onCommentChange = (event: any) => {
    this.setState({ comment: event.target.value })
  };

  addComment = async () => {
    if (this.state.comment && this.props.userId) {
      const response = await fetch(
        `http://localhost:3000/expenses/${this.props.userId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ comment: this.state.comment })
        }
      );
      this.props.fetchExpense();
      this.setState({ comment: ' ' });
      return await response.json();
    }
  };

  render() {
    return (
      <>
        <input
          type='text'
          placeholder={this.props.placeholder}
          autoComplete='off'
          value={this.state.comment}
          onChange={this.onCommentChange}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              this.addComment();
            }
          }}
        />
        <button onClick={this.addComment}>{this.props.placeholder}</button>
      </>
    );
  }
}

export default Comment;