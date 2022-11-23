import React , {createContext, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';


// Initial-State -  [
//   { id: 1, text: 'Flower', amount: -20 },
//   { id: 2, text: 'Salary', amount: 300 },
//   { id: 3, text: 'Book', amount: -10 },
//   { id: 4, text: 'Camera', amount: 150 }
// ]

// [{id: 0, text:'N/A', amount: 0}]

//create context
export const GlobalContext = createContext();

//provider component 
export const GlobalProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([])

    const addTransactions = (text, amount) => {
      setTransactions([...transactions, {id: uuidv4(), text, amount }])
    }
    
    const removeTransactions = (id) => {
      setTransactions(transactions.filter(transaction => transaction.id !== id))
    }

    return (<GlobalContext.Provider value={{transactions, addTransactions, removeTransactions}}>
        {children}
      </GlobalContext.Provider>);
    }