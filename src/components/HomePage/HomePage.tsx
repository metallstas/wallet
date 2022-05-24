import i18next from 'i18next'
import { useEffect, useState } from 'react'
import { initReactI18next, useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { getCategories } from '../../redux/actions/categoriesAction'
import { ICategory } from '../../redux/reducers/categoriesReducer'
import { IState } from '../../redux/store'
import { CardCategory } from '../CardCategory/CardCategory'
import cls from './HomePage.module.css'

export const HomePage = () => {
  const { t, i18n } = useTranslation()
  const categories = useSelector(
    (state: IState) => state.categoriesReducer.categories
  )
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
  }, [])

  const onClickChangeBackground = () => {
    navigate('/add-category')
  }

  return (
    <section>
      <div className={cls.transaction}>
        
        <NavLink className={cls.transaction__link} to={'./myTransactions'}>
          {t('myExpenses')}
        </NavLink>
      </div>

      <div className={cls.categories}>
        {categories
          ? categories.map((category: ICategory) => {
              return (
                <CardCategory
                  key={category.id}
                  title={category.title}
                  id={category.id}
                  icon={category.icon}
                  color={category.color}
                />
              )
            })
          : null}
      </div>

      <button onClick={onClickChangeBackground} className={cls.button}>
        +
      </button>
    </section>
  )
}
