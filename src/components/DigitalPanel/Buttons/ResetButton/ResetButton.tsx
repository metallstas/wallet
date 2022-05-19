import cls from './ResetButton.module.css'

interface IReetButton {
  onClickReset: () => void
}

export const ResetButton = ({onClickReset}: IReetButton) => {
  return (
    <p className={cls.resetButton} onClick={onClickReset}>{'C'}</p>
  )
}