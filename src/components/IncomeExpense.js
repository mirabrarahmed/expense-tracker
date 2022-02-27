import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpense = () => {
  const {transactions} = useContext(GlobalContext)
  const payments = transactions.map(transaction => transaction.amount)

  const income = payments.filter(payment => payment > 0)
                         .reduce((prev_val, new_val) => (prev_val += new_val),0)
                         .toFixed(2)

  const expense = payments.filter(payment => payment < 0)
                         .reduce((prev_val, new_val) => (prev_val += new_val),0)
                         .toFixed(2)

  return (
    <div className="inex-container">
        <div className="income">
            <h4>INCOME</h4>
            <p style={{color: "#59ab44"}}>${income}</p>
        </div>
        <div className="expense">
            <h4>EXPENSE</h4>
            <p style={{color:"#d44444"}}>${expense[0] === "-"? expense.slice(1):expense}</p>
        </div>
    </div >
  )
}
