export interface Expense {
    id: string;
    amount: {
      value: string,
      currency: string
    };
    date: string;
    merchant: string;
    receipts: any[];
    comment: string;
    category: string;
    user: {
      first: string,
      last: string,
      email: string
    };
  }