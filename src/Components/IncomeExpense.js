import React from 'react'

export default function IncomeExpense(props) {
    if(props.data.length>0){

        const amounts = props.data.map((t)=>t.amount) //get all the amounts from the transactions array
        const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0) // get all the positive amlounts

        const expense = (
            amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
            -1
          )  //get all the negative amounts
        return (
            <div className="inc-exp-container">
            <div>
              <h4>Income</h4>
            <p className="money plus">{income}</p>
            </div>
            <div>
              <h4>Expense</h4>
            <p className="money minus">{expense}</p>
            </div>
          </div>
        )
    }
    else{
        return(
            <p>No Items</p>
        )
    }
}
