import cls from './DeleteButton.module.css'

interface IDeleteButton {
  onCLickDelete: () => void
}

export const DeleteButton = ({onCLickDelete}: IDeleteButton) => {
  return (
    <p className={cls.deleteButton} onClick={onCLickDelete}>{'<'}</p>
  )
}