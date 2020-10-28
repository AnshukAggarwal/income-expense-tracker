import React from 'react'

export default function Transaction({data,deleteTransaction}) {
    const sign =data.amount>0? "+": "-"
    return (
        <li className={data.amount>0?"plus":"minus"}>
           {data.text}
            <span>{sign}${Math.abs(data.amount)}</span>
            <button onClick={()=>deleteTransaction(data._id)}>Delete</button>
        </li>
    )
}
