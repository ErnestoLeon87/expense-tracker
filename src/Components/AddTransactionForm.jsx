import React, { useContext, useState } from 'react'
import { TransactionContext } from "./TransactionProvider";

export default function AddTransactionForm() {

    const [expense, setExpense] = useContext(TransactionContext);

    const [newExp, setNewExp] = useState({
        name: '',
        amount: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(name + ' -- ' + value);
        setNewExp({ ...newExp, [name]: value });
    }

    const handleSubmit = () => {

    }


    return (
        <section className="section">
            <header className="header-section">
                <h3>Add new transaction</h3>
            </header>
            <div>
                <form action="">
                    <div className="form-item">
                        <label htmlFor="name">Transaction </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Transaction name"

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

                            onChange={(e) => handleChange(e)} />
                    </div>
                    <button className="btn" type="submit">Add transaction</button>
                </form>
            </div>
        </section>
    )
}
