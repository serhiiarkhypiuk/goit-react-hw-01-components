import React from "react";
import PropTypes from "prop-types"
import TransactionHistoryRow from "../TransactionHistoryRow/TransactionHistoryRow"
import styles from "./TransactionHistoryTable.module.scss"

const TransactionHistoryTable = ({ transactions }) => {
  return (
    <section className="section" id="transactions">
      <table className={styles.transactionHistory}>
        <thead>
          <tr>
            <th className={styles.item}>Type</th>
            <th className={styles.item}>Amount</th>
            <th className={styles.item}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction =>
            <TransactionHistoryRow key={transaction.id} type={transaction.type} amount={transaction.amount} currency={transaction.currency} />
          )}
        </tbody>
      </table>
    </section>
  )
}

TransactionHistoryTable.propTypes = {
  transactions: PropTypes.array
}

export default TransactionHistoryTable