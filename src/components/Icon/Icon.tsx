import { IconType } from 'react-icons'
import { IoIosCheckmark } from 'react-icons/io'
import { icons } from '../../redux/constans'
import cls from './Icon.module.css'

export interface IIconActive {
  icon: IconType | string
  id: string
}

interface IIcon {
  activeIcon: IIconActive
  setActiveIcon: (icon: IIconActive) => void
}


export const Icon = ({activeIcon, setActiveIcon}: IIcon) => {
  return (
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
  )
}
