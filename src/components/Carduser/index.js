import React, { useEffect, useState } from 'react'
import {Card} from './styles'

export default function CardUser({nome,email,id,status}) {
  const[isonline,setisOnline]=useState()

  useEffect(()=>{
    if(status){
      setisOnline("Online")
    }else{
      setisOnline("Offline")
    }
  })

  return (
    <Card>
      <h4>Id: {id}</h4>
      <h5>Status:<p className={isonline}>{isonline}</p></h5>
      <h1>Nome: {nome}</h1>
      <h4>Email: {email}</h4>
    </Card>
  )
}
