import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Transaction = ({transaction}) => {
    const {handleDelete} = useContext(GlobalContext)
    const sign = transaction.amount > 0? "+": "-"
  return (
    <li 
        className={transaction.amount > 0? 'plus': 'minus'
        }>
        {transaction.name}
        <span>
            {console.log(transaction.amount)}
            {sign}${Math.abs(transaction.amount).toFixed(2)}
        </span>
        <button onClick={() => handleDelete(transaction.id)} className='del-btn'>x</button>
        </li> 
  )
}
