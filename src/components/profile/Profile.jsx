import propTypes from 'prop-types';

export default function Profile(props) {
	const {
		username,
		tag,
		location = 'N/A',
		avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
		followers = 0,
		views = 0,
		likes = 0,
	} = props;

	return (
		<div className="profile">
			<div className="description">
				<img src={avatar} alt="User avatar" className="avatar" />
				<p className="name">{username}</p>
				<p className="tag">@{tag}</p>
				<p className="location">{location}</p>
			</div>

			<ul className="stats">
				<li>
					<span className="label">Followers</span>
					<span className="quantity">{followers}</span>
				</li>
				<li>
					<span className="label">Views</span>
					<span className="quantity">{views}</span>
				</li>
				<li>
					<span className="label">Likes</span>
					<span className="quantity">{likes}</span>
				</li>
			</ul>
		</div>
	);
}

Profile.propTypes = {
	username: propTypes.string.isRequired,
	tag: propTypes.string.isRequired,
	location: propTypes.string,
	avatar: propTypes.string,
	followers: propTypes.number,
	views: propTypes.number,
	likes: propTypes.number,
};
