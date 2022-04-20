import { ICategory } from '../../redux/reducers/categoriesReducer'
import { icons } from '../AddCategory/AddCategory'
import { AiOutlineExpand } from 'react-icons/ai'
import cls from './CardCategory.module.css'

export const CardCategory = ({ title, id, icon, color }: ICategory) => {
  const currentIcon = icons.reduce(
    (prev, current) => {
      return current.id === icon ? current : prev
    },
    { icon: AiOutlineExpand, id: '' }
  )

  return (
    <div className={cls.category} id={id.toString()}>
      <div style={{ background: color, height: '100%'}}>
        <currentIcon.icon className={cls.icon}></currentIcon.icon>
        <h2 className={cls.title}>{title}</h2>
      </div>
    </div>
  )
}
