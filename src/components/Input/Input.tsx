import { ChangeEvent } from "react"

interface IInput {
  label: string
  id: string
  type?: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({id, label, type = 'text', onChange, value}: IInput) => {
  return (
    <>
      <label htmlFor={id}>{label} </label>
      <input id={id} type={type} value={value} onChange={(e) => onChange(e)}/>
    </>
  )
}
