import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCategory } from '../../redux/actions/categoriesAction'
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

const color = [
  { color: '#ffeb3b', id: 'yellow' },
  { color: '#03a9f4', id: 'blue' },
  { color: '#ff2121', id: 'red' },
  { color: '#8bc34a', id: 'green' },
  { color: '#ff9800', id: 'orange' },
]

const icon = [
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

interface IIcon {
  icon: IconType | string
  id: string
}

export const AddCategory = () => {
  const dispatch = useDispatch()
  const [activeColor, setActiveColor] = useState<IColor>()
  const [activeIcon, setActiveIcon] = useState<IIcon>()

  const [title, setTitle] = useState<string>('')
  const [id, setId] = useState<number>(2)

  const onChangeTitle = useCallback((e) => {
    setTitle(e.target.value)
  }, [])

  const onClickAddCategory = () => {
    setId((prev) => prev + 1)
    const newCategory: ICategory = {
      title,
      id,
      icon: activeIcon ? `${activeIcon.id}` : '',
      color: activeColor ? `${activeColor.color}` : '',
    }
    console.log(newCategory)
    dispatch(addCategory(newCategory))
    setTitle('')
    setActiveColor({ color: '', id: '' })
    setActiveIcon({ icon: '', id: '' })
  }

  return (
    <div className={cls.addCategory}>
      <div className={cls.container}>
        <Input
          label='Название категории'
          id='title'
          value={title}
          onChange={onChangeTitle}
        />
        <div className={cls.iconBlock}>
          <p>Иконки: </p>
          <div>
            {icon.map((el) => {
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
          <p>Цвет: </p>
          <div className={cls.colorBlock}>
            {color.map((el) => {
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
        <button onClick={onClickAddCategory}>Добавить</button>
      </div>
    </div>
  )
}
