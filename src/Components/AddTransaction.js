import React, { useContext, useState } from 'react'
import { GlobalContext } from '../Context/GlobalState'

const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const {addTransactions, transactions} = useContext(GlobalContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        addTransactions(text, parseInt(amount, 10) )
        setText('')
        setAmount(0)
    }

    return (
        <>
        <form id="form" onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input
                    type="text"
                    value={text}
                    placeholder="Enter text..."
                    onChange = {(e) => setText(e.target.value)}
                    required
                />
            </div>
            <div className="form-control">
                <label htmlFor="amount"
                    >Amount <br />
                    (negative - expense, positive - income)</label
                >
                <input
                    type="number"
                    value={amount}
                    placeholder="Enter amount..."
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
            </div>
            <button className="btn">Add transaction</button>
        </form>
        </>
    )
}

export default AddTransaction
