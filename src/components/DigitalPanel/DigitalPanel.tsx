import { DeleteButton } from './Buttons/DeleteButton/DeleteButton'
import { NumberButton } from './Buttons/NumberButton/NumberButton'
import { ResetButton } from './Buttons/ResetButton/ResetButton'
import cls from './DigitalPanel.module.css'

interface IDigitalPanel {
  money: string
  setMoney: React.Dispatch<React.SetStateAction<string>>
}

export const DigitalPanel = ({ money, setMoney }: IDigitalPanel) => {
  const onClickNumber = (value: number | string) => {
    if (money.includes('.') && value === '.') {
      return
    }
    setMoney((prev) => prev + value)
  }

  const onCLickDelete = () => {
    setMoney((prev) => prev.slice(0, -1))
  }

  const onClickReset = () => {
    setMoney((prev) => '')
  }
  
  return (
    <div>
      <div className={cls.keyboard}>
        {console.log('renderKeyboard')}
        <div style={{ display: 'flex' }}>
          <div className={cls.numbers}>
            <NumberButton onClickNumber={() => onClickNumber(1)}>
              1
            </NumberButton>
            <NumberButton onClickNumber={() => onClickNumber(2)}>
              2
            </NumberButton>
            <NumberButton onClickNumber={() => onClickNumber(3)}>
              3
            </NumberButton>
            <NumberButton onClickNumber={() => onClickNumber(4)}>
              4
            </NumberButton>
            <NumberButton onClickNumber={() => onClickNumber(5)}>
              5
            </NumberButton>
            <NumberButton onClickNumber={() => onClickNumber(6)}>
              6
            </NumberButton>
            <NumberButton onClickNumber={() => onClickNumber(7)}>
              7
            </NumberButton>
            <NumberButton onClickNumber={() => onClickNumber(8)}>
              8
            </NumberButton>
            <NumberButton onClickNumber={() => onClickNumber(9)}>
              9
            </NumberButton>
            <NumberButton onClickNumber={() => onClickNumber(0)}>
              0
            </NumberButton>
          </div>
          <div className={cls.anotherButtons}>
            <ResetButton onClickReset={onClickReset} />
            <DeleteButton onCLickDelete={onCLickDelete} />
            <NumberButton onClickNumber={() => onClickNumber('.')}>
              {'.'}
            </NumberButton>
          </div>
        </div>
      </div>
    </div>
  )
}
