import { ChangeEvent, useEffect, useState } from 'react'
import { FaGuitar } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { getTransactions } from '../../redux/actions/transactionAction'
import { icons } from '../../redux/constans'
import { ITransactions } from '../../redux/reducers/transactionsReducer'
import { IState } from '../../redux/store'
import cls from './TransactionsList.module.css'
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs'

export const TransactionsList = () => {
  const dispatch = useDispatch()
  const [sortUp, setSortUp] = useState(true)
  const [sortType, setSortType] = useState('')
  const transactions = useSelector(
    (state: IState) => state.transactionsReducer.transactions
  )

  useEffect(() => {
    dispatch(getTransactions())
  }, [])

  const currIcon = (text: string) => {
    const a = icons.reduce(
      (prev, current) => {
        return current.id === text ? current : prev
      },
      { icon: FaGuitar, id: '' }
    )
    return <a.icon />
  }

  const onCLickSortUp = () => {
    setSortUp((prev) => !prev)
  }

  const sortTransactions = () => {
    const newTransact = [...transactions]

    if (sortType === 'category') {
      const currSort = newTransact.sort(
        (prev: ITransactions, next: ITransactions) => {
          if (prev.category.title < next.category.title) {
            return -1
          }
          return 1
        }
      )
      return currSort
    }

    if (sortType === 'date') {
      const currSort = newTransact.sort(
        (prev: ITransactions, next: ITransactions) => {
          const prevDate = prev.date
            .split('.')
            .reverse()
            .join('.')
            .replaceAll('.', '-')
          const nextDate = next.date
            .split('.')
            .reverse()
            .join('.')
            .replaceAll('.', '-')
          return Date.parse(prevDate) - Date.parse(nextDate)
        }
      )
      return currSort
    }

    if (sortType === 'sum') {
      const currSort = newTransact.sort(
        (prev: ITransactions, next: ITransactions) => {
          if (!sortUp) {
            return +next.sum - +prev.sum
          }
          return +prev.sum - +next.sum
        }
      )
      return currSort
    }
    return transactions
  }

  const onChangeSort = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortType(e.target.value)
  }

  return (
    <section>
      {console.log(transactions)}
      <h1>Transactions List</h1>
      <div>
        <div className={cls.sort}>
          <p className={cls.sort__title}>Сортировать по:</p>
          <select onChange={onChangeSort}>
            <option value=''></option>
            <option value='category'>Ктегории</option>
            <option value='date'>Дате</option>
            <option value='sum'>Сумме</option>
          </select>
          {sortType === 'sum' ? (
            <div onClick={onCLickSortUp}>
              {sortUp ? (
                <p className={cls.sort__ascending}>
                  По возрастанию <BsFillCaretUpFill />{' '}
                </p>
              ) : (
                <p className={cls.sort__ascending}>
                  По убыванию
                  <BsFillCaretDownFill />
                </p>
              )}
            </div>
          ) : null}
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <table className={cls.transactions__table}>
          <tbody>
            <tr className={cls.table__string}>
              <td>№</td>
              <td>Ктегория</td>
              <td>Дата</td>
              <td>Заметка</td>
              <td>Сумма</td>
            </tr>
            {transactions
              ? sortTransactions().map((el: ITransactions, index) => {
                  return (
                    <tr className={cls.table__string} key={el.id}>
                      <td>{index + 1}</td>
                      <td className={cls.table__icon}>
                        {el.category.title} {currIcon(el.category.id)}
                      </td>
                      <td>{el.date}</td>
                      <td>{el.note}</td>
                      <td>{el.sum}$</td>
                    </tr>
                  )
                })
              : null}
          </tbody>
        </table>
      </div>
    </section>
  )
}
