import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory } from '../../redux/actions/categoriesAction'
import { ICategory } from '../../redux/reducers/categoriesReducer'
import { Input } from '../Input/Input'
import { FaGuitar } from 'react-icons/fa'
import cls from './AddCategory.module.css'
import { validationServices } from '../../services/validation'
import { PreviewCategory } from '../PreviewCategory/PreviewCategory'
import { useNavigate } from 'react-router-dom'
import { IState } from '../../redux/store'
import { colors, icons } from '../../redux/constans'
import { Color, IColorActive } from '../Color/Color'
import { Icon, IIconActive } from '../Icon/Icon'

export interface IErrors {
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
  const [activeColor, setActiveColor] = useState<IColorActive>(redactColor)
  const [activeIcon, setActiveIcon] = useState<IIconActive>(redactIcon)
  const [errors, setErrors] = useState<IErrors>({ title: '' })
  const [title, setTitle] = useState<string>(category ? category.title : '')

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
        <button className={cls.button} onClick={onClickAddCategory}>
          Добавить
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
  )
}
