import React from 'react'
import HistoryItem from './HistoryItem'

export default function History() {
    return (
        <section className="section">
            <header className="header-section">
                <h3>History</h3>
            </header>
            <div>
                {/* List of expenses */}
                <HistoryItem name={"some"} amount={40} />

            </div>
        </section>
    )
}
