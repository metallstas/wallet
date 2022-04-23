import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addCategory,
  clearReductCategory,
  removeCategory,
  updateCategory,
} from '../../redux/actions/categoriesAction'
import { ICategory } from '../../redux/reducers/categoriesReducer'
import { Input } from '../Input/Input'
import { GiConsoleController } from 'react-icons/gi'
import { IoCarSportOutline } from 'react-icons/io5'
import { FaBicycle } from 'react-icons/fa'
import { FaGuitar } from 'react-icons/fa'
import { IoMdPhonePortrait } from 'react-icons/io'
import { IoIosCheckmark } from 'react-icons/io'
import cls from './AddCategory.module.css'
import { IconType } from 'react-icons/lib'
import { validationServices } from '../../services/validation'
import { PreviewCategory } from '../PreviewCategory/PreviewCategory'
import { useNavigate } from 'react-router-dom'
import { IState } from '../../redux/store'

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

interface IColor {
  color: string
  id: string
}

export interface IIcon {
  icon: IconType | string
  id: string
}

interface IErrors {
  title: string
}

export const AddCategory = ({}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const category = useSelector(
    (state: IState) => state.categoriesReducer.redactCategory
  )
  const redactIcon = icons.reduce(
    (prev, current) => {
      return current.id === category.icon ? current : prev
    },
    { icon: FaGuitar, id: '' }
  )

  const redactColor = colors.reduce(
    (prev, current) => {
      return current.color === category.color ? current : prev
    },
    { color: '#fff', id: '' }
  )
  const [activeColor, setActiveColor] = useState<IColor>(redactColor)
  const [activeIcon, setActiveIcon] = useState<IIcon>(redactIcon)
  const [errors, setErrors] = useState<IErrors>({ title: '' })
  const [title, setTitle] = useState<string>(category ? category.title : '')

  useEffect(() => {
    return () => {
      dispatch(clearReductCategory())
    }
  }, [])

  const createIdCategory = () => {
    return +Math.random().toString().slice(2)
  }

  const onChangeTitle = useCallback((e) => {
    const error = validationServices.validationTitle(e.target.value)
    setErrors((errors) => ({ ...errors, title: error }))
    setTitle(e.target.value)
  }, [])

  const onClickAddCategory = () => {
    const errors = { title: validationServices.validationTitle(title) }
    setErrors(errors)
    if (errors.title !== '') {
      return
    }

    const newCategory: ICategory = {
      title,
      id: createIdCategory(),
      icon: activeIcon ? `${activeIcon.id}` : '',
      color: activeColor ? `${activeColor.color}` : '',
    }
    dispatch(addCategory(newCategory))
    setTitle('')
    setActiveColor({ color: '', id: '' })
    setActiveIcon({ icon: '', id: '' })
    navigate('/')
  }

  const onClickSaveChanges = () => {
    const errors = { title: validationServices.validationTitle(title) }
    setErrors(errors)
    if (errors.title !== '') {
      return
    }
    console.log(category.id)
    const redactCategory: ICategory = {
      title,
      id: category.id,
      icon: activeIcon.id,
      color: activeColor.color,
    }
    dispatch(updateCategory(redactCategory))
  }

  const onClickRemoveCategory = () => {
    setActiveColor({color: '', id: ''})
    setActiveIcon({icon: '', id: ''})
    setTitle('')
    dispatch(removeCategory(category.id))
  }

  return (
    <div className={cls.addCategory}>
      <div className={cls.container}>
        <Input
          label='Название категории'
          id='title'
          value={title}
          onChange={onChangeTitle}
          error={errors.title}
        />

        <div className={cls.iconBlock}>
          <p className={cls.nameBlock}>Иконки: </p>
          <div>
            {icons.map((el) => {
              return (
                <span key={el.id} className={cls.iconWrap}>
                  <el.icon
                    className={
                      activeIcon && activeIcon.id === el.id
                        ? `${cls.icon} ${cls.active}`
                        : `${cls.icon}`
                    }
                    onClick={(e) => {
                      if (e.currentTarget.id === el.id) {
                        setActiveIcon(el)
                      }
                    }}
                    id={el.id}
                  ></el.icon>
                  {activeIcon && activeIcon.id === el.id ? (
                    <IoIosCheckmark className={cls.iconCheck} />
                  ) : null}
                </span>
              )
            })}
          </div>
        </div>
        <div className={cls.iconBlock}>
          <p className={cls.nameBlock}>Цвет: </p>
          <div className={cls.colorBlock}>
            {colors.map((el) => {
              return (
                <p
                  onClick={(e) => {
                    if (e.currentTarget.id === el.id) {
                      setActiveColor(el)
                    }
                  }}
                  key={el.id}
                  style={{ background: `${el.color}` }}
                  className={
                    activeColor && activeColor.id === el.id
                      ? `${cls.color} ${cls.active}`
                      : `${cls.color}`
                  }
                  id={el.id}
                >
                  {activeColor && activeColor.id === el.id ? (
                    <IoIosCheckmark />
                  ) : null}
                </p>
              )
            })}
          </div>
        </div>
        {category.title ? (
          <button className={cls.button} onClick={onClickSaveChanges}>
            Сохранить Изменения
          </button>
        ) : (
          <button className={cls.button} onClick={onClickAddCategory}>
            Добавить
          </button>
        )}
      </div>
      {title || activeColor || activeIcon ? (
        <PreviewCategory
          title={title ? title : ''}
          icon={activeIcon ? activeIcon.id : ''}
          color={activeColor ? activeColor?.color : ''}
        />
      ) : null}
      {console.log(category)}
      {category.title ? (
        <button className={cls.button} onClick={onClickRemoveCategory}>
          Удалить категорию
        </button>
      ) : null}
    </div>
  )
}
