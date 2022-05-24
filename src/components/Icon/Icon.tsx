import { t } from 'i18next'
import { useTranslation } from 'react-i18next'
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
  const { t } = useTranslation()
  return (
    <div className={cls.iconBlock}>
      <p className={cls.nameBlock}>{t('icons')}: </p>
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
