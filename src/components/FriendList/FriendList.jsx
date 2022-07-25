import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "components/FrinedListItem/FriendListItem";
import styles from "./FriendList.module.scss"

const FriendList = ({ friends }) => {
  return (
    <section className="section" id="friendsList">
      <ul className={styles.friendList}>
        {friends.map(friend => (
          <FriendListItem key={friend.id} isOnline={friend.isOnline} avatar={friend.avatar} name={friend.name} />
        ))}
      </ul>
    </section>
  )
}

FriendList.propTypes = {
  friends: PropTypes.array
}

export default FriendList