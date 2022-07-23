import React from "react"
import PropTypes from "prop-types";

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <li className="item">
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  )
}

FriendListItem.propTypes = {
  id: PropTypes.string,
  isOnline: PropTypes.string,
  avatar: PropTypes.string,
  name: PropTypes.string,
}

export default FriendListItem