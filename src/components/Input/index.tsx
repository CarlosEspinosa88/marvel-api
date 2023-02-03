import React from "react"

type InputType = {
  name: string
  value: string
  type: string
  onChange: (value: any) => void
}


function Input({ name, type, value, onChange }: InputType) {
  return (
    <div>
      <input name={name} type={type} value={value} onChange={onChange} />
    </div>
  ) 
}

export default Input