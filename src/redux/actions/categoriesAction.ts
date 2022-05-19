import { ICategory } from './../reducers/categoriesReducer'
import { Dispatch } from 'redux'
import { ACTIONS } from '../constans'
import { ICategories } from '../reducers/categoriesReducer'

const allCategory = (categories: ICategories[]) => {
  return { type: ACTIONS.GET_CATEGORIES, categories }
}

export const redactCategory = (category: ICategory) => {
  return { type: ACTIONS.REDACT_CATEGORY, category }
}

export const getCategories = () => {
  return async (dispatch: Dispatch) => {
    const resp = await fetch('http://localhost:3005/categories')
    const data = await resp.json()
    dispatch(allCategory(data))
  }
}

export const clearReductCategory = () => {
  return { type: ACTIONS.CLEAR_REDACT_CATEGORY }
}

export const updateCategory = (category: ICategory) => {
  return async () => {
    const resp = await fetch(
      `http://localhost:3005/categories/${category.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(category),
      }
    )
  }
}

export const addCategory = (category: ICategory) => {
  return async () => {
    const resp = await fetch('http://localhost:3005/categories', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(category),
    })
  }
}

export const removeCategory = (id: number) => {
  return async () => {
    const resp = await fetch(`http://localhost:3005/categories/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      }
    })
  }
}

export const getCategoryById = (id: number) => {
  return async (dispatch: Dispatch) => {
    const resp = await fetch(`http://localhost:3005/categories/${id}`)
    const data = await resp.json()
    dispatch({type: ACTIONS.GET_CATEGORY_BY_ID, data})
  }
}
