import React, { useState, createContext } from 'react'

export const TransactionContext = createContext()

export default function TransactionProvider(props) {


    const [expense, setExpense] = useState([
        {
            name: 'Paycheck',
            amount: 1200
        },
    ]);

    return (
        <TransactionContext.Provider value={[expense, setExpense]} >
            {props.children}
        </TransactionContext.Provider >
    )
}
