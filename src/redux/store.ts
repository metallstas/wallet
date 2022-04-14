import { categoriesReducer, ICategories } from './reducers/categoriesReducer';
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

export interface IState {
  categoriesReducer: ICategories
}

export const store = createStore(
  combineReducers({categoriesReducer}),
  composeWithDevTools(applyMiddleware(thunk))
)
