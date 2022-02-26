import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";

const initState = {
    transactions: [
        {id:1, name:"Camera", amount:-200},
        {id:2, name:"Salary", amount:1400},
        {id:3, name:"Food", amount:-200},
        {id:4, name:"Rent", amount:-800},
    ]
}

export const GlobalContext = createContext(initState)


export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initState)

  return(
      <GlobalContext.Provider value={{
          transactions: state.transactions
      }}>
          {children}
      </GlobalContext.Provider>
  )
}
