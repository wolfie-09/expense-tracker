import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

const Transaction = ({transaction}) => {
    const sign = transaction.amount < 0 ? '-' : '+'
    const {removeTransactions} = useContext(GlobalContext)
    
    return (
        <li className= {sign === '-' ? 'minus' : 'plus'}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
            <button 
                className="delete-btn"
                onClick={() => removeTransactions(transaction.id)}
            >x</button>
        </li>
    )
}

export default Transaction
