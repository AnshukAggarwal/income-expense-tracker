import React, { useState, useEffect} from 'react'
import './App.css';
import Balance from "./Components/Balance"
import IncomeExpense from "./Components/IncomeExpense"
import TransactionList from "./Components/TransactionList"
import TransactionForm from "./Components/TransactionForm"
import { getTransactions, addTransaction , DeleteTransaction } from "./api/api"

const App= ()=>{
  const [transactions, setTranascations] = useState([]);
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState("")

  useEffect(() => {
    async function fetchData(){
      let result = await getTransactions();
      setTranascations(result)
    }
    fetchData();
  }, [description,amount])

  const handleDescription= (e)=>{
    setDescription(e.target.value)
  }

  const handleAmount = (e)=>{
    setAmount(parseInt(e.target.value))
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    const newItem={
      //_id:transactions[transactions.length-1]._id+1,
      text:description,
      amount:amount
    }
    addTransaction(newItem)
    //setTranascations(transactions.concat(newItem))
    setDescription("")
    setAmount("")
  }

  const deleteTransaction=(id)=>{
    DeleteTransaction(id)
    setTranascations(transactions.filter((transaction)=>transaction._id!==id))
  }
  return(
    <div className="container">
      <TransactionForm
      description={description}
      amount={amount}
      handleDescription={handleDescription}
      handleAmount={handleAmount}
      handleSubmit={handleSubmit}/>
      <IncomeExpense data={transactions}/>
      <Balance
      transactions={transactions}/>
      <TransactionList 
      transactions={transactions}
      deleteTransaction={deleteTransaction}/>
    </div>
  )
}

export default App;
