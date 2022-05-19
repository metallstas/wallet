import { FaBicycle, FaGuitar } from "react-icons/fa"
import { GiConsoleController } from "react-icons/gi"
import { IoMdPhonePortrait } from "react-icons/io"
import { IoCarSportOutline } from "react-icons/io5"

export const ACTIONS = {
  GET_CATEGORIES: 'GET_CATEGORIES',
  ADD_CATEGORY: 'ADD_CATEGORY',
  REDACT_CATEGORY: 'REDACT_CATEGORY',
  CLEAR_REDACT_CATEGORY: 'CLEAR_REDACT_CATEGORY',
  GET_CATEGORY_BY_ID: 'GET_CATEGORY_BY_ID',
}

export const colors = [
  { color: '#ffeb3b', id: 'yellow' },
  { color: '#03a9f4', id: 'blue' },
  { color: '#ff2121', id: 'red' },
  { color: '#8bc34a', id: 'green' },
  { color: '#ff9800', id: 'orange' },
]

export const icons = [
  { icon: GiConsoleController, id: 'games' },
  { icon: IoCarSportOutline, id: 'car' },
  { icon: FaBicycle, id: 'bike' },
  { icon: FaGuitar, id: 'guitar' },
  { icon: IoMdPhonePortrait, id: 'smartphone' },
]
