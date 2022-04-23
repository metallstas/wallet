import { useCallback, useEffect, useState } from 'react'
import { FaGuitar } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import {
  clearReductCategory,
  removeCategory,
  updateCategory,
} from '../../redux/actions/categoriesAction'
import { colors, icons } from '../../redux/constans'
import { ICategory } from '../../redux/reducers/categoriesReducer'
import { IState } from '../../redux/store'
import { validationServices } from '../../services/validation'
import { IErrors } from '../AddCategory/AddCategory'
import { Color, IColorActive } from '../Color/Color'
import { Icon, IIconActive } from '../Icon/Icon'
import { Input } from '../Input/Input'
import { PreviewCategory } from '../PreviewCategory/PreviewCategory'
import cls from './RedactCategory.module.css'

export const RedactCategory = () => {
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

  const dispatch = useDispatch()
  const [activeColor, setActiveColor] = useState<IColorActive>(redactColor)
  const [activeIcon, setActiveIcon] = useState<IIconActive>(redactIcon)
  const [errors, setErrors] = useState<IErrors>({ title: '' })
  const [title, setTitle] = useState<string>(category ? category.title : '')

  useEffect(() => {
    return () => {
      dispatch(clearReductCategory())
    }
  }, [])

  const onClickDeleteCategory = () => {
    setActiveColor({ color: '', id: '' })
    setActiveIcon({ icon: '', id: '' })
    setTitle('')
    dispatch(removeCategory(category.id))
  }

  const onChangeTitle = useCallback((e) => {
    const error = validationServices.validationTitle(e.target.value)
    setErrors((errors) => ({ ...errors, title: error }))
    setTitle(e.target.value)
  }, [])

  const onClickSaveChanges = () => {
    const errors = { title: validationServices.validationTitle(title) }
    setErrors(errors)
    if (errors.title !== '') {
      return
    }
    const redactCategory: ICategory = {
      title,
      id: category.id,
      icon: activeIcon.id,
      color: activeColor.color,
    }
    dispatch(updateCategory(redactCategory))
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
        <Icon activeIcon={activeIcon} setActiveIcon={setActiveIcon} />
        <Color activeColor={activeColor} setActiveColor={setActiveColor} />
        <div className={cls.buttonBlock}>
          <button className={cls.button} onClick={onClickDeleteCategory}>
            Удалить категорию
          </button>
          <button className={cls.button} onClick={onClickSaveChanges}>
            Сохранить Изменения
          </button>
        </div>
        {title || activeColor || activeIcon ? (
          <PreviewCategory
            title={title ? title : ''}
            icon={activeIcon ? activeIcon.id : ''}
            color={activeColor ? activeColor?.color : ''}
          />
        ) : null}
      </div>
    </div>
  )
}
