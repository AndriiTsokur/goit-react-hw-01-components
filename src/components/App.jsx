import Profile from './profile/Profile';
import userProfile from './profile/user.json';

import Statistics from './statistics/Statistics';
import Data from './statistics/Data';
import statData from './statistics/stat-data.json';

import FriendList from './friend-list/FriendList';
import FriendCard from './friend-list/FriendCard';
import friends from './friend-list/friends.json';

import TransactionHistory from './transactions/TransactionHistory';
import TransactionItem from './transactions/TransactionItem';
import transactions from './transactions/transactions.json';

export default function App() {
	return (
		<>
			<Profile
				username={userProfile.username}
				tag={userProfile.tag}
				location={userProfile.location}
				avatar={userProfile.avatar}
				followers={userProfile.stats.followers}
				views={userProfile.stats.views}
				likes={userProfile.stats.likes}
			/>

			<Statistics title="Upload Stats">
				{statData.map(({ id, label, percentage }) => (
					<Data key={id} label={label} percentage={percentage} />
				))}
			</Statistics>

			<FriendList>
				{friends.map(({ avatar, name, isOnline, id }) => (
					<FriendCard
						key={id}
						avatar={avatar}
						name={name}
						isOnline={isOnline}
					/>
				))}
			</FriendList>

			<TransactionHistory>
				{transactions.map(({ id, type, amount, currency }) => (
					<TransactionItem
						key={id}
						type={type}
						amount={amount}
						currency={currency}
					/>
				))}
			</TransactionHistory>
		</>
	);
}
