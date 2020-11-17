import React from 'react'

export default function Balance({transactions}){

    if(transactions.length>0){
        let amounts = transactions.map((t)=> t.amount)
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        let balance = amounts.reduce(reducer) 
        return (
            <div>
                <h3>Balance</h3>
                <span>$ {balance}</span>
            </div>
        )
    }
    else{
        return(
            <p>No</p>
        )
    }
    

}
