import { ACTIONS } from "../constans"

export interface ITransactions {
  date: string
  sum: string
  category: {title: string, id: string}
  id: number
  note: string
}

export interface ITransactionsReducer {
  transactions: ITransactions[]
}

const defaultState = {
  transactions: [],
}

export const transactionsReducer = (state = defaultState, action: any) => {
  if(action.type === ACTIONS.GET_TRANSACTIONS) {
    return {transactions: action.data}
  }
  return state
}
