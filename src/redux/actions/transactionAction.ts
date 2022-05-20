import { Dispatch } from "redux"
import { ACTIONS } from "../constans"

export const addTransaction = (transObj: any) => {
  return async () => {
    const resp = await fetch('http://localhost:3005/transaction', {
      method: 'POST',
      headers: { 
        'Content-type': 'application/json' 
      },
      body: JSON.stringify(transObj)
    })
  }
}

export const getTransactions = () => {
  return async (dispatch: Dispatch) => {
    const responce = await fetch('http://localhost:3005/transaction')
    const data = await responce.json()
    dispatch({type: ACTIONS.GET_TRANSACTIONS, data})
  }
}
