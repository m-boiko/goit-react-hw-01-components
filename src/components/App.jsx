import data from 'components/data/data.json'
import user from 'components/data/user.json'
import friends from 'components/data/friends.json'
import transactions from 'components/data/transactions.json'


import Profile from 'components/Profile/Profile'
import FriendList from './FriendList/FriendList'
import Statistics from './Statistics/Statistics'
import TransactionHistory from './TransactionHistory/TransactionHistory'


export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: '#010101'
      }}
    >
    

<Profile 
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
<Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} text="lorem"/>
    </div>
  );
};
