import propTypes from 'prop-types';

export default function FriendCard({
	avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
	name,
	isOnline,
	id,
}) {
	return (
		<li className="item">
			<span className="status">{isOnline}</span>
			<img className="avatar" src={avatar} alt="User avatar" width="48" />
			<p className="name">{name}</p>
		</li>
	);
}

FriendCard.propTypes = {
	avatar: propTypes.string,
	name: propTypes.string.isRequired,
	isOnline: propTypes.bool.isRequired,
	id: propTypes.number,
};
