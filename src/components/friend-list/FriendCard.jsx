import propTypes from 'prop-types';
import { handleFriendStatus } from 'utils';
import css from './FriendCard.module.css';

export default function FriendCard({ avatar, name, isOnline }) {
	return (
		<li className={css.item}>
			<span
				className={css.status}
				style={{ backgroundColor: handleFriendStatus(isOnline) }}
			/>
			<img className={css.avatar} src={avatar} alt="User avatar" width="48" />
			<p className={css.name}>{name}</p>
		</li>
	);
}

FriendCard.propTypes = {
	avatar: propTypes.string.isRequired,
	name: propTypes.string.isRequired,
	isOnline: propTypes.bool.isRequired,
};
