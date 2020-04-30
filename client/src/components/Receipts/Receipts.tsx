import React, { FunctionComponent  } from 'react';

interface IReceiptsProps {
    userId: string,
    fetchExpense(): void;
};

const Receipts: FunctionComponent <IReceiptsProps>  = ({ userId, fetchExpense }) => {
    const addReceipt = async (event: any) => {
        console.log(event.target.files)
        console.log(event.target.files[0]);
        if (userId) {
          let receipt = new FormData()
          receipt.append('receipt', event.target.files[0])
          const response = await fetch(
            `http://localhost:3000/expenses/${userId}/receipts`,
            {
              method: 'POST',
              body: receipt

            }

          );
          fetchExpense();
          return await response.json();
        }
      };

        return (
            <>
                <label>
                    <input type='file' name='file' onChange={addReceipt} placeholder=' Add receipt' />
                    Add receipt
            </label>
            </>
        );
}

export default Receipts;