import React, { useContext } from 'react'
import HistoryItem from './HistoryItem'
import { TransactionContext } from "./TransactionProvider";

export default function History() {

    const { transactions } = useContext(TransactionContext);


    return (
        <section className="section">
            <header className="header-section">
                <h3>History</h3>
            </header>
            <ul className="list">
                {/* List of expenses */}
                {transactions.map(trans => {
                    return <HistoryItem key={trans.id} transaction={trans} />
                })}


            </ul>
        </section>
    )
}
