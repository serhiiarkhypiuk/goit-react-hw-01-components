import React from "react";
import PropTypes from "prop-types"
import TransactionHistoryRow from "../TransactionHistoryRow/TransactionHistoryRow"

const TransactionHistoryTable = ({ transactions }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction =>
          <TransactionHistoryRow key={transaction.id} type={transaction.type} amount={transaction.amount} currency={transaction.currency} />
        )}
      </tbody>
    </table>
  )
}

TransactionHistoryTable.propTypes = {
  transactions: PropTypes.array
}

export default TransactionHistoryTable