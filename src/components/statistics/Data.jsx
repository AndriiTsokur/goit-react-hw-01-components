import propTypes from 'prop-types';

export default function Data({ id, label, percentage }) {
	return (
		<li className="item">
			<span className="label">{label}</span>
			<span className="percentage">{percentage}%</span>
		</li>
	);
}

Data.propTypes = {
	id: propTypes.string,
	label: propTypes.string.isRequired,
	percentage: propTypes.number.isRequired,
};
