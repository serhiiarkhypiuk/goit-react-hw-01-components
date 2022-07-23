import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "components/FrinedListItem/FriendListItem";

const FriendList = (friends) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <FriendListItem key={friend.id} isOnline={friend.isOnline} avatar={friend.avatar} name={friend.name} />
      ))}
    </ul>
  )
}

FriendList.propTypes = {
  friends: PropTypes.array
}

export default FriendList