import { useCallback, useState } from 'react'
import { Input } from '../Input/Input'

export const Modal = () => {
  const [title, setTitle] = useState<string>('')

  const onChangeTitle = useCallback((e) => {
    setTitle(e.target.value)
  }, [])

  return (
    <div>
      <Input label='Title' id='title' value={title} onChange={onChangeTitle} />
    </div>
  )
}
