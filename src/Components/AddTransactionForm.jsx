import React from 'react'

export default function AddTransactionForm() {
    return (
        <section className="section">
            <div className="section-header">
                <h3>Add new transaction</h3>
            </div>
            <div>
                <form action="">
                    <div>
                        <label htmlFor="text">Transaction </label>
                        <input type="text" name="text" id="text" placeholder="Transaction name" />
                    </div>
                    <div>
                        <label htmlFor="amount">Amount (negative - expense, positive - income) </label>
                        <input type="number" name="amount" id="amount" placeholder="Enter amount" />
                    </div>
                    <button className="btn" type="submit">Add transaction</button>
                </form>
            </div>
        </section>
    )
}
