import React, { useContext } from 'react'
import { TransactionContext } from './TransactionProvider';

export default function HistoryItem({ transaction }) {
    const { deleteTransaction } = useContext(TransactionContext);

    const sign = transaction.amount > 0 ? '+' : '-';

    return (
        <li className={transaction.amount < 0 ? "minus" : "plus"}>
            {transaction.text}<span>{`${sign}$${Math.abs(transaction.amount)}.00`}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
        </li>
    )
}
