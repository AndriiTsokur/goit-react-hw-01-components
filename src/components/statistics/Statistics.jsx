import PropTypes from 'prop-types';
import Data from './Data';
import css from './Statistics.module.css';

export default function Statistics({ title, filesData }) {
	return (
		<section className={css.statistics}>
			{title && <h2 className={css.title}>{title}</h2>}
			<ul className={css.statList}>
				{filesData.map(({ id, label, percentage }) => (
					<Data key={id} label={label} percentage={percentage} />
				))}
			</ul>
		</section>
	);
}

Statistics.propTypes = {
	title: PropTypes.string,
	filesData: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			percentage: PropTypes.number.isRequired,
		})
	).isRequired,
};
