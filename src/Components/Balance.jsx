import React, { useContext, useState, useEffect } from 'react'
import { TransactionContext } from './TransactionProvider'

export default function Balance() {

    const { transactions } = useContext(TransactionContext);

    // Save each transaction amount in the amounts array
    const amounts = transactions.map(trans => trans.amount);

    const balance = amounts.reduce(
        (acc, item) => (acc += item), 0
    ).toFixed(2);

    // const getBalance = () => {
    //     let total = 0;
    //     transactions.forEach(ex => {
    //         total = total + Number.parseInt(ex.amount, 10);
    //     });
    //     // setBalance(total);
    // }

    // useEffect(() => {
    //     getBalance()
    // }, [transactions]);


    return (
        <section className="section">
            <header className="header-section">
                <h3>YOUR BALANCE</h3>
                <h1>{`$${balance}`}</h1>
            </header>
        </section>
    )
}
