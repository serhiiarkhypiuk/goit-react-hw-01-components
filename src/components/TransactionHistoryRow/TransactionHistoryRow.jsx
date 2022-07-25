import React from "react"
import PropTypes from "prop-types"
import styles from "./TransactionHistoryRow.module.scss"

const TransactionHistoryRow = ({ type, amount, currency }) => {
  return (
    <tr className={styles.row}>
      <td className={styles.item}>{type}</td>
      <td className={styles.item}>{amount}</td>
      <td className={styles.item}>{currency}</td>
    </tr>
  )
}

TransactionHistoryRow.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string
}

export default TransactionHistoryRow