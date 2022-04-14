import { ACTIONS } from "../constans"

export interface ICategory {
  title: string
  id: number
  color: string
  icon: string
}

export interface ICategories {
  categories: ICategory[]
}

const defaultState: ICategories = {
  categories: []
}

export const categoriesReducer = (state = defaultState, action: any) => {
  if (action.type === ACTIONS.GET_CATEGORIES) {
    return {categories: action.categories}
  }

  return state
}
