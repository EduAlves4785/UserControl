import React from 'react'
import {Botao} from './styles'

export default function Button({text,onClick}) {
  return (
    <Botao onClick={onClick}>{text}</Botao>
  )
}
