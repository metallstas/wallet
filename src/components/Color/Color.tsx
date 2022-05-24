import { t } from 'i18next'
import { useTranslation } from 'react-i18next'
import { IoIosCheckmark } from 'react-icons/io'
import { colors } from '../../redux/constans'
import cls from './Color.module.css'

export interface IColorActive {
  color: string
  id: string
}

interface IColor {
  activeColor: IColorActive
  setActiveColor: (color: IColorActive) => void
}

export const Color = ({ activeColor, setActiveColor}: IColor) => {
  const { t } = useTranslation()
  return (
    <div className={cls.colorBlock}>
          <p className={cls.nameBlock}>{t('color')}: </p>
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
  )
}
