import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import Transaction from './Transaction'

const TransactionList = () => {

    const {transactions} = useContext(GlobalContext)

    return transactions.length ? (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction}/>
                ))}
            </ul>
        </>
    ): (
        <>
            <h3>History</h3>
            <ul className="list">The list is empty.</ul>
        </>
    )
}

export default TransactionList
