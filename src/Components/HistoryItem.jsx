import React from 'react'

export default function HistoryItem({ name, amount }) {
    return (
        <div className="item-history">
            <div className="item">
                <label htmlFor="" className="label-name">{name}</label>
            </div>
            <div className="item">
                <label htmlFor="" className="label-amount">{amount}</label>
            </div>
            <div className="item-status">

            </div>
        </div>
    )
}
