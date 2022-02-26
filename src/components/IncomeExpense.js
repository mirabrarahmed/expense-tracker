import React from 'react'

export const IncomeExpense = () => {
  return (
    <div className="inex-container">
        <div className="income">
            <h4>INCOME</h4>
            <p style={{color: "greenyellow"}}>$0.00</p>
        </div>
        <div className="expense">
            <h4>EXPENSE</h4>
            <p style={{color:"red"}}>$0.00</p>
        </div>
    </div >
  )
}
