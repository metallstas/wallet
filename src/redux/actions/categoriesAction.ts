import { Dispatch } from 'redux'
import { ACTIONS } from '../constans'
import { ICategories, ICategory } from '../reducers/categoriesReducer'

const category = (categories: ICategories[]) => {
  return { type: ACTIONS.GET_CATEGORIES, categories }
}

export const getCategories = () => {
  return async (dispatch: Dispatch) => {
    const resp = await fetch('http://localhost:3005/categories')
    const data = await resp.json()
    dispatch(category(data))
  }
}

export const addCategory = (category: ICategory) => {
  console.log(category)
  return async () => {
    const resp = await fetch('http://localhost:3005/categories', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(category),
    })
    console.log(resp.json())
  }
}
