import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'

export default function TransactionHistory({transactions}) {
   
    return (
<table className={css.transactionTable}>
      <thead className={css.tableHead}>
        <tr className={css.tableHeader}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
            </thead>
        <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td className={css.typeList}>{type}</td>
              <td className={css.amountList}>{amount}</td>
              <td className={css.currencyList}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
      </table>
   
    )
}
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
};