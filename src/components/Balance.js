import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
  const {transactions} = useContext(GlobalContext)
  const payments = transactions.map(transaction => transaction.amount)
  console.log(payments)
  const balance = payments.reduce((prev_val, new_val) => (prev_val += new_val)).toFixed(2)
  console.log(typeof balance) 
  return (
      <>
        <h3>Balance</h3>
        <h1 style={parseInt(balance) > 0? {color:'greenyellow'} : {color:'red'} }>${balance}</h1>
      </>
  )
}
