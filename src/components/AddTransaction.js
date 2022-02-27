import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { v4 as uuidv4 } from 'uuid';

export const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const {handleAdd} = useContext(GlobalContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        const new_payment = {
            id: uuidv4(),
            name:text.charAt(0).toUpperCase() + text.slice(1),
            amount:parseFloat(amount)
        }

        handleAdd(new_payment)
    }

  return (
      <>
        <h3>Add New Transaction</h3>
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input 
                    type="text" 
                    placeholder='Enter Text..' 
                    value={text} 
                    onChange={(e) => setText(e.target.value)}
                    required/>
            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount <br /> (Put "-" before amount in case of expense)</label>
                <input 
                type="number" 
                placeholder='Enter Amount..' 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}/>
            </div>
            <button className="btn">Add Transaction</button>
        </form>
      </>
  )
}
