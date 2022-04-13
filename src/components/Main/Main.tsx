import { useState } from 'react'
import cls from './Main.module.css'

export const Main = () => {
  const [isBlueButton, setIsBlueButton] = useState<boolean>(false)

  const onClickChangeBackground = () => {
    setIsBlueButton((prev) => !prev)
  }
  const styleBtn = {
    background: isBlueButton ? 'blue' : '',
    color: isBlueButton ? '#fff' : '',
  }

  return (
    <main>
      <button
        style={styleBtn}
        onClick={onClickChangeBackground}
        className={cls.button}
      >
        +
      </button>
    </main>
  )
}
