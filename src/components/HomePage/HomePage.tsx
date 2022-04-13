import { useState } from "react"
import { useNavigate } from "react-router-dom"
import cls from './HomePage.module.css'

export const HomePage = () => {
  const [isBlueButton, setIsBlueButton] = useState<boolean>(false)
  const navigate = useNavigate()
  const onClickChangeBackground = () => {
    setIsBlueButton((prev) => !prev)
    navigate('/modal')
  }
  const styleBtn = {
    background: isBlueButton ? 'blue' : '',
    color: isBlueButton ? '#fff' : '',
  }
  return (
    <section>
      <button
        style={styleBtn}
        onClick={onClickChangeBackground}
        className={cls.button}
      >
        +
      </button>
    </section>
  )
}
