import React from 'react'

export default function AddTransactionForm() {
    return (
        <section className="section">
            <header className="section-header">
                <h3>Add new transaction</h3>
            </header>
            <div>
                <form action="">
                    <div className="form-item">
                        <label htmlFor="text">Transaction </label>
                        <input type="text" name="text" id="text" placeholder="Transaction name" />
                    </div>
                    <div className="form-item">
                        <label htmlFor="amount">Amount</label><br />
                        <label htmlFor="amount">(negative - expense, positive - income) </label>
                        <input type="number" name="amount" id="amount" placeholder="Enter amount" />
                    </div>
                    <button className="btn" type="submit">Add transaction</button>
                </form>
            </div>
        </section>
    )
}
