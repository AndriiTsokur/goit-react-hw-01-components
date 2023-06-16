import Profile from 'components/Profile/Profile';
import user from 'components/Profile/user.json';

import Statistics from 'components/Statistics/Statistics';
import statData from 'components/Statistics/stat-data.json';

import FriendList from 'components/FriendList/FriendList';
import friends from 'components/FriendList/friends.json';

import TransactionHistory from 'components/Transactions/TransactionHistory';
import transactions from 'components/Transactions/transactions.json';

export default function App() {
	return (
		<>
			<Profile userData={user} />
			<Statistics title="Upload Stats" filesData={statData} />
			<FriendList friendsData={friends} />
			<TransactionHistory transactionsData={transactions} />
		</>
	);
}
