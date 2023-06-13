import Profile from './profile/Profile';
import userProfile from './profile/user.json';
import Statistics from './statistics/Statistics';

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

			<Statistics />
		</>
	);
}
