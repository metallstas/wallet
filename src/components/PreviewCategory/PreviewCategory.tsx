import { icons } from '../../redux/constans'
import { AiOutlineExpand } from 'react-icons/ai'
import cls from './PreviewCategory.module.css'
import { useTranslation } from 'react-i18next'

interface IPreviewCategory {
  color: string
  icon: string
  title: string
}

export const PreviewCategory = ({ color, icon, title }: IPreviewCategory) => {
  const { t } = useTranslation()
  const currentIcon = icons.reduce(
    (prev, current) => {
      return current.id === icon ? current : prev
    },
    { icon: AiOutlineExpand, id: '' }
  )

  return (
    <div className={cls.previewBlock}>
      <p>{t('preview')}</p>
      <div className={cls.preview} style={{ background: color }}>
        <currentIcon.icon className={cls.icon} />
        <h2 className={cls.title}>{title}</h2>
      </div>
    </div>
  )
}
