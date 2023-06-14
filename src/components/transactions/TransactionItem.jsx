import propTypes from 'prop-types';

export default function TransactionItem({ id, type, amount, currency }) {
	return (
		<tr>
			<td>{type}</td>
			<td>{amount}</td>
			<td>{currency}</td>
		</tr>
	);
}

TransactionItem.propTypes = {
	id: propTypes.string,
	type: propTypes.string.isRequired,
	amount: propTypes.string.isRequired,
	currency: propTypes.string.isRequired,
};
