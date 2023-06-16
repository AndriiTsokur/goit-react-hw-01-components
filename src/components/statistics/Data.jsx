import { randomColorizer } from 'utils';
import PropTypes from 'prop-types';
import css from './Data.module.css';

export default function Data({ label, percentage }) {
	return (
		<li className={css.item} style={{ backgroundColor: randomColorizer() }}>
			<span className={css.label}>{label}</span>
			<span className={css.percentage}>{percentage}%</span>
		</li>
	);
}

Data.propTypes = {
	label: PropTypes.string.isRequired,
	percentage: PropTypes.number.isRequired,
};
