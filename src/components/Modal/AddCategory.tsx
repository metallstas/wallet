import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCategory } from '../../redux/actions/categoriesAction'
import { ICategory } from '../../redux/reducers/categoriesReducer'
import { Input } from '../Input/Input'

export const AddCategory = () => {
  const dispatch = useDispatch()

  const [title, setTitle] = useState<string>('')
  const [id, setId] = useState<number>(2)

  const onChangeTitle = useCallback((e) => {
    setTitle(e.target.value)
  }, [])

  const onClickAddCategory = () => {
    setId(prev => prev + 1)
    const newCategory: ICategory = {
      title,
      id,
      icon: '',
      color: '',
    }
    dispatch(addCategory(newCategory))
    setTitle('')
  }

  return (
    <div>
      <Input label='Title' id='title' value={title} onChange={onChangeTitle} />
      <button onClick={onClickAddCategory}>Добавить</button>
    </div>
  )
}
