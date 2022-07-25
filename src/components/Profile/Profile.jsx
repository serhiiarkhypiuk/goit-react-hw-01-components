import React from "react";
import PropTypes from 'prop-types'
import styles from './Profile.module.scss'

const Profile = ({ username = "User Name", tag = "inst", location = "City, Country", avatar = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png", stats = ({followers: "1000", views: "2000", likes: "3000"})}) => {
  return (
    <section className="section" id="profile">
      <div className={styles.profile}>
        <div className={styles.description}>
          <img
            src={avatar}
            alt="User avatar"
            className={styles.avatar}
          />
          <p className={styles.name}>{username}</p>
          <p className={styles.tag}>@{tag}</p>
          <p className={styles.location}>{location}</p>
        </div>

        <ul className={styles.stats}>
          <li>
            <span className={styles.label}>Followers</span>
            <span className={styles.quantity}>{stats.followers}</span>
          </li>
          <li>
            <span className={styles.label}>Views</span>
            <span className={styles.quantity}>{stats.views}</span>
          </li>
          <li>
            <span className={styles.label}>Likes</span>
            <span className={styles.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </section>
  )
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object
}

export default Profile