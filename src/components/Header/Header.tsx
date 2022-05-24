import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import cls from './Header.module.css'

export const Header = () => {
  const { t } = useTranslation()

  const changeLanguage = () => {
    i18next.language === 'en'
      ? i18next.changeLanguage('ru')
      : i18next.changeLanguage('en')
  }

  const currLanguage = i18next.language === 'en' ? 'en' : 'ru'

  return (
    <header className={cls.header}>
      <div className={cls.container}>
        <div className={cls.wrapper}>
          Header
          <button className={cls.language_btn} onClick={changeLanguage}>
            {currLanguage}
          </button>
        </div>
      </div>
    </header>
  )
}
