import PropTypes from 'prop-types';
import FriendCard from './FriendCard';
import css from './FriendList.module.css';

export default function FriendList({ friendsData }) {
	return (
		<ul className={css.friendList}>
			{friendsData.map(({ avatar, name, isOnline, id }) => (
				<FriendCard key={id} avatar={avatar} name={name} isOnline={isOnline} />
			))}
		</ul>
	);
}

FriendList.propTypes = {
	friendsData: PropTypes.arrayOf(
		PropTypes.exact({
			avatar: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			isOnline: PropTypes.bool.isRequired,
			id: PropTypes.number.isRequired,
		}).isRequired
	).isRequired,
};
