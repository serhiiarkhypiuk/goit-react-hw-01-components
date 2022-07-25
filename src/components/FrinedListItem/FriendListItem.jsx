import React from "react"
import PropTypes from "prop-types";
import styles from "./FriendListItem.module.scss"

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <li className={styles.item}>
      <span className={`${isOnline ? styles.statusTrue : styles.statusFalse} ${styles.status}`}></span>
      <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  )
}

FriendListItem.propTypes = {
  id: PropTypes.string,
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
}

export default FriendListItem