import cls from './NumberButton.module.css'

interface INumberButton {
  children: any
  onClickNumber: (number: any) => void
}

export const NumberButton = ({ children, onClickNumber }: INumberButton) => {
  const classButton = () => {
    if (children === '0') {
      return `${cls.buttonCalc} ${cls.buttonCalcZero}`
    }
    if (children === '.') {
      return `${cls.buttonCalc} ${cls.buttonCalcDote}`
    }
    return cls.buttonCalc
  }

  return (
    <p className={classButton()} onClick={onClickNumber}>
      {children}
    </p>
  )
}
