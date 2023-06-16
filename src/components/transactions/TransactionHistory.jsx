import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';
import css from './TransactionHistory.module.css';

export default function TransactionHistory({ transactionsData }) {
	return (
		<table className={css.transactionHistory}>
			<thead>
				<tr>
					<th>Type</th>
					<th>Amount</th>
					<th>Currency</th>
				</tr>
			</thead>

			<tbody>
				{transactionsData.map(({ id, type, amount, currency }) => (
					<TransactionItem
						key={id}
						type={type}
						amount={amount}
						currency={currency}
					/>
				))}
			</tbody>
		</table>
	);
}

TransactionHistory.propTypes = {
	transactionsData: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.string.isRequired,
			type: PropTypes.string.isRequired,
			amount: PropTypes.string.isRequired,
			currency: PropTypes.string.isRequired,
		}).isRequired
	).isRequired,
};
