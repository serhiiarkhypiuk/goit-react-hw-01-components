import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import Profile from './components/Profile/Profile';
import user from './data/user.json';

import Statistics from './components/Statistics/Statistics';
import data from './data/data.json';

import FriendList from 'components/FriendList/FriendList';
import friends from './data/friends.json';

import TransactionHistoryTable from './components/TransactionHistoryTable/TransactionHistoryTable';
import transactions from './data/transactions.json';

import Button from 'components/Button/Button';
import buttons from './data/buttons.json';
import styles from './components/Button/Button.module.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <section className={styles.sectionButtons}>
      {buttons.map(button => (
        <Button key={button.id} btnText={button.text} btnLink={button.link} />
      ))}
    </section>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />
    <TransactionHistoryTable transactions={transactions} />
  </React.StrictMode>
);
