export default function TransactionHistory({ children }) {
	return (
		<table className="transaction-history">
			<thead>
				<tr>
					<th>Type</th>
					<th>Amount</th>
					<th>Currency</th>
				</tr>
			</thead>

			<tbody>{children}</tbody>
		</table>
	);
}
