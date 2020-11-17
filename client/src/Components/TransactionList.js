import React from 'react'
import Transaction from "./Transaction"

export default function TransactionList({transactions,deleteTransaction}) {
    return (
        <div>
            <h2>My Transactions</h2>
            <ul className="list">
                {transactions.map((t)=><Transaction key ={t._id} data={t} deleteTransaction={deleteTransaction}/>)}
            </ul>
        </div>
    )
}
