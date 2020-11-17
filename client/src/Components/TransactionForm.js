import React from "react";

function Form({description, amount, handleDescription, handleAmount, handleSubmit}){
    return(
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="desc">Description:</label>
                <input type="text"
                required
                name= "description"
                value={description}
                id="desc"
                onChange={handleDescription}/>
            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount: </label>
                <span>Add a (-)minus sign for an expense</span>
                <input type="number" 
                required
                name= "amount"
                value={amount}
                id="amount"
                onChange={handleAmount}/>
            </div>
            <div>
                <button className="btn">Add</button>
            </div>
        </form>
    )
}

export default Form
