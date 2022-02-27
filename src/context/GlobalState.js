import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";

const initState = {
    transactions: []
}

export const GlobalContext = createContext(initState)


export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initState)

  function handleDelete(id){
      dispatch(
          {
              type: "DELETE_PAYMENT",
              payload: id
          }
      )
  }
  function handleAdd(transaction){
      dispatch(
          {
              type: "ADD_PAYMENT",
              payload: transaction
          }
      )
  }

  return(
      <GlobalContext.Provider value={{
          transactions: state.transactions,
          handleDelete,
          handleAdd
      }}>
          {children}
      </GlobalContext.Provider>
  )
}
