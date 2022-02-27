import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
  const {transactions} = useContext(GlobalContext)
  const payments = transactions.map(transaction => transaction.amount)
  const balance = payments.reduce((prev_val, new_val) => (prev_val += new_val),0).toFixed(2)

  return (
      <>
        <h3>Balance</h3>
        <h1 style={parseInt(balance) > 0? {color:'#59ab44'} : {color:'#d44444'} }>${balance}</h1>
      </>
  )
}
