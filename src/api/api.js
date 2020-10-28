import axios from 'axios'

export const getTransactions = async()=>{
    let {data} = await axios.get('http://localhost:5000/transactions');
    return data
}

export const addTransaction=(transaction)=>{
    axios.post('http://localhost:5000/transactions/add',transaction)
}

export const DeleteTransaction= (id)=>{
    axios.delete(`http://localhost:5000/transactions/delete/${id}`)
}