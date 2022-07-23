import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import Profile from './components/Profile/Profile';
import user from './user.json';

import Statistics from './components/Statistics/Statistics';
import data from './data.json';

import FriendList from 'components/FriendList/FriendList';
import friends from './friends.json';

import TransactionHistoryTable from './components/TransactionHistoryTable/TransactionHistoryTable';
import transactions from './transactions.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
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
