import propTypes from 'prop-types';

export default function Statistics({ title, children }) {
	return (
		<section className="statistics">
			{title && <h2 className="title">{title}</h2>}
			<ul className="stat-list">{children}</ul>
		</section>
	);
}

Statistics.propTypes = {
	title: propTypes.string,
};
