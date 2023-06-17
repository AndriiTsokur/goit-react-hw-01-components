import Profile from 'components/profile/Profile';
import user from 'components/profile/user.json';

import Statistics from 'components/statistics/Statistics';
import statData from 'components/statistics/stat-data.json';

import FriendList from 'components/friend-list/FriendList';
import friends from 'components/friend-list/friends.json';

import TransactionHistory from 'components/transactions/TransactionHistory';
import transactions from 'components/transactions/transactions.json';

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
