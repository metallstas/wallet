import { ITransactionsReducer, transactionsReducer } from './reducers/transactionsReducer';
import { categoriesReducer, ICategories } from './reducers/categoriesReducer';
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

export interface IState {
  categoriesReducer: ICategories
  transactionsReducer: ITransactionsReducer
}

export const store = createStore(
  combineReducers({categoriesReducer, transactionsReducer}),
  composeWithDevTools(applyMiddleware(thunk))
)
