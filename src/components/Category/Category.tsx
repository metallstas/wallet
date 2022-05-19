import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getCategoryById } from '../../redux/actions/categoriesAction'
import { transaction } from '../../redux/actions/transactionAction'
import { IState } from '../../redux/store'
import { DigitalPanel } from '../DigitalPanel/DigitalPanel'
import cls from './Category.module.css'

export const Category = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [notes, setNotes] = useState<string>('')
  const [money, setMoney] = useState<string>('')
  const categoryTitle = useSelector(
    (state: IState) => state.categoriesReducer.category.title
  )

  useEffect(() => {
    if (id) {
      dispatch(getCategoryById(+id))
    }
  }, [])

  const onChangeNote = (e: any) => {
    setNotes(e.target.value)
  }

  const onClickEnter = () => {
    const date = new Date()
    const currDate = date.getDate()
    const currMounth =
      date.getMonth() < 10
        ? `0${date.getMonth() + 1}`
        : `${date.getMonth() + 1}`
    const currYear = date.getFullYear()
    const transactionObj = {
      date: `${currDate}.${currMounth}.${currYear}`,
      sum: money,
      category: categoryTitle,
      id: Date.now(),
      note: notes,
    }
    console.log(transactionObj)
    setMoney('')
    setNotes('')
    dispatch(transaction(transactionObj))
  }

  return (
    <section>
      <h1>{categoryTitle}</h1>
      <div>
        <div className={cls.notes}>
          <label htmlFor='notes'>Заметки</label>
          <textarea
            value={notes}
            onChange={onChangeNote}
            name='Заметки'
            id='notes'
          ></textarea>
        </div>
        <div className={cls.clockface}>
          <h1 className={cls.summ}>{money} $</h1>
        </div>
        <DigitalPanel money={money} setMoney={setMoney} />
      </div>
      <div>
        <button className={cls.enter_button} onClick={onClickEnter}>
          Добавить расходы
        </button>
      </div>
    </section>
  )
}
