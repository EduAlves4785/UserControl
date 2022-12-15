import React from 'react'
import {InputUser,Label,Perror} from './styles'

export default function Input({label,type,onChange,error}) {
  return (
    <>
      <Label>
        {label}
        <InputUser type={type} onChange={onChange}/>
        <Perror>{error}</Perror>
      </Label>
    </>
  )
}
