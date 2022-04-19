import { ChangeEvent } from "react"
import cls from './Input.module.css'

interface IInput {
  label: string
  id: string
  type?: string
  value: string
  error?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({id, label, type = 'text', onChange, value, error}: IInput) => {
  const input = error ? `${cls.input} ${cls.errorInput}` : `${cls.input}`
  return (
    <div className={cls.inputBlock}>
      <label htmlFor={id}>{label} </label>
      <input className={input} id={id} type={type} value={value} onChange={(e) => onChange(e)}/>
      {error ? <p className={cls.error}>{error}</p> : null}
    </div>
  )
}
