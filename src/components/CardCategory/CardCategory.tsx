import { ICategory } from '../../redux/reducers/categoriesReducer'
import { icons } from '../../redux/constans'
import { AiOutlineExpand } from 'react-icons/ai'
import cls from './CardCategory.module.css'
import { useState } from 'react'
import { VscSettingsGear } from 'react-icons/vsc'
import { useDispatch } from 'react-redux'
import { redactCategory } from '../../redux/actions/categoriesAction'
import { useNavigate } from 'react-router-dom'

export const CardCategory = ({ title, id, icon, color }: ICategory) => {
  const [showGear, setShowGear] = useState<boolean>(false)
  const [mouseEnterGear, setMouseEnterGear] = useState<boolean>(false)
  const dsipatch = useDispatch()
  const navigate = useNavigate()
  const currentIcon = icons.reduce(
    (prev, current) => {
      return current.id === icon ? current : prev
    },
    { icon: AiOutlineExpand, id: '' }
  )

  const onClickGear = () => {
    dsipatch(redactCategory({ title, id, icon, color }))
    navigate('/redact-category')
  }

  const onClickCrad = () => {
    navigate(`/category/${id}`)
  }

  return (
    <div
      onClick={onClickCrad}
      onMouseEnter={() => setShowGear(true)}
      onMouseLeave={() => setShowGear(false)}
      className={cls.category}
      id={id ? id.toString() : ''}
    >
      <div style={{ background: color, height: '100%' }}>
        {showGear ? (
          <VscSettingsGear
            onMouseEnter={() => setMouseEnterGear(true)}
            onMouseLeave={() => setMouseEnterGear(false)}
            className={mouseEnterGear ? `${cls.gear} ${cls.active}` : `${cls.gear}`}
            onClick={onClickGear}
          />
        ) : null}

        <currentIcon.icon className={cls.icon}></currentIcon.icon>
        <h2 className={cls.title}>{title}</h2>
      </div>
    </div>
  )
}
