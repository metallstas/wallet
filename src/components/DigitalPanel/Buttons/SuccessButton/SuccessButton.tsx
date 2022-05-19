import cls from './SuccessButton.module.css'
import { BsArrowReturnLeft } from "react-icons/bs";

interface ISuccesButton {
  onClickEnter: () => void
}

export const SuccessButton = ({onClickEnter}: ISuccesButton) => {
  return <p className={cls.successButton} onClick={onClickEnter}>Enter</p>
}