import React from "react";
import PropTypes from 'prop-types'
import styles from "./Statistics.module.scss"

const Statistics = ({ title, stats }) => {
  return (
    <div className={styles.container}>
      {title && <h2 className={styles.title}>{title}</h2>}
    
      <ul className={styles.statList}>
        {stats.map(stat => (
          <li className={styles.item} key={stat.id}>
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}%</span>
            </li>
        ))}
      </ul>
    </div>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array
}

export default Statistics