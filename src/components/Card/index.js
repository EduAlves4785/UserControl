import React, { useState } from 'react'
import Button from '../Button'
import Input from '../Input'
import {CardContainer,Status} from './styles'

export default function Card() {
  const[email,setEmail]=useState('');
  const[senha,setSenha]=useState('');
  const[nome,setNome]=useState('')
  const[userStatus,setUserStatus]=useState()
  const[erroMsg,seterroMsg]=useState('')
  const[statusMsg,setstatusMsg]=useState('')
  const[isValid,setisValid]=useState(false)

  const url='http://localhost:5000/usuarios'

  const usuario={
    userName:nome,
    userEmail:email,
    userPassword:senha,
    userStatus:userStatus
  }

  function onlineStatus(id){
    fetch(`http://localhost:5000/usuarios/${id}`
    ,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(usuario),
    })
  }

  function loginUser(){
    fetch(url)
    .then(resp=>resp.json())
    .then(data=>{
      for (let i = 0; i < data.length; i++) {
        if(email.includes(data[i].userEmail)){
          setstatusMsg("Usuário logado!")
          setUserStatus(true)
          onlineStatus(data[i].id)
        }else{
          setstatusMsg("Usuário não encontrado!")
        }
      }
    })
  }

  function validate(){
    if(!email || !nome || !senha){
      seterroMsg("Dados inválidos")
      function limpar(){
        seterroMsg(" ")
      }
      setTimeout(limpar,4000)
    }else{
      fetch(url)
      .then(resp=>resp.json())
      .then(data=>{
        setisValid(true)
        setUserStatus(false)
        setstatusMsg("Usuário cadastrado!")
      })
    }
    if(isValid===true){
      setUserStatus(false)
      fetch(url,{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(usuario),
      }).then((resp)=>resp.json()).catch(()=>setstatusMsg("Erro no servidor"))
    }
    }
  
  return (
    <CardContainer>
      <h1>Faça seu login!</h1>
        <Input label={"Nome"} type={"text"} onChange={(e)=>setNome(e.target.value)} error={erroMsg}/>
        <Input label={"E-mail"} type={"email"} onChange={(e)=>setEmail(e.target.value)} error={erroMsg}/>
        <Input label={"Senha"} type={"password"} onChange={(e)=>setSenha(e.target.value)} error={erroMsg}/>
      <Button text={"Logar"} onClick={loginUser}/>
      <h4>Ainda não tem cadastro?<br></br>Clique aqui<Button text={"Cadastrar"} onClick={validate}/></h4>
      <Status>{statusMsg}</Status>
    </CardContainer>
  )
}
