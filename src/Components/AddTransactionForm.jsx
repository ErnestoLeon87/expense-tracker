import React, { useContext, useState } from 'react'
import { TransactionContext } from "./TransactionProvider";

export default function AddTransactionForm() {

    const { addTransaction } = useContext(TransactionContext);

    const [newExp, setNewExp] = useState({
        text: '',
        amount: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewExp({ ...newExp, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newTrasn = {
            id: Math.floor(Math.random() * 1000000),
            text: newExp.text,
            amount: +newExp.amount
        }
        console.log(newTrasn);
        await addTransaction(newTrasn);
        setNewExp({ text: '', amount: '' })
    }


    return (
        <section className="section">
            <header className="header-section">
                <h3>Add new transaction</h3>
            </header>
            <div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-item">
                        <label htmlFor="text">Transaction </label>
                        <input
                            type="text"
                            name="text"
                            id="text"
                            placeholder="Transaction name"
                            value={newExp.text}
                            onChange={(e) => handleChange(e)} />
                    </div>
                    <div className="form-item">
                        <label htmlFor="amount">Amount</label><br />
                        <label htmlFor="amount">(negative - expense, positive - income) </label>
                        <input
                            type="number"
                            name="amount"
                            id="amount"
                            placeholder="Enter amount"
                            value={newExp.amount}
                            onChange={(e) => handleChange(e)} />
                    </div>
                    <button className="btn" type="submit">Add transaction</button>
                </form>
            </div>
        </section>
    )
}
