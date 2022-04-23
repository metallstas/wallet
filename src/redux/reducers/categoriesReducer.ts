import { ACTIONS } from '../constans'

export interface ICategory {
  title: string
  id: number
  color: string
  icon: string
}

export interface ICategories {
  categories: ICategory[]
  redactCategory: ICategory
}

const defaultState: ICategories = {
  categories: [],
  redactCategory: { title: '', id: 0, color: '', icon: '' },
}

export const categoriesReducer = (state = defaultState, action: any) => {
  if (action.type === ACTIONS.GET_CATEGORIES) {
    return { ...state, categories: action.categories }
  }

  if (action.type === ACTIONS.REDACT_CATEGORY) {
    return {...state, redactCategory: action.category}
  }

  if (action.type === ACTIONS.CLEAR_REDACT_CATEGORY) {
    return {...state, redactCategory: defaultState.redactCategory}
  }

  return state
}
