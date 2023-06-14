import Profile from './profile/Profile';
import userProfile from './profile/user.json';
import Statistics from './statistics/Statistics';
import Data from './statistics/Data';
import statData from './statistics/stat-data.json';

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
		</>
	);
}
