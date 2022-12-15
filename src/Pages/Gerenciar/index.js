import React, { useEffect, useState } from 'react'
import CardUser from '../../components/Carduser'
import Nav from '../../components/NavBar'
import {Body,DeletePanel} from './styles'

export default function Gerenciar() {
  
    const url='http://localhost:5000/usuarios'
    const[userList,setUserList]=useState([])
    const[id,setId]=useState()
    const[msg,setMsg]=useState()

    useEffect(()=>{
      fetch(url)
      .then(async response=>{
        setUserList(await response.json())
      })
    },[])

    function handleChange(idUser){
      setId(idUser)
    }
    
    function updateDataBase(){
      const url=`http://localhost:5000/usuarios/${id}`
      fetch(url,{
        method:'PATCH',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(userList),
      })
      setMsg("Usuário removido!")
    }

    function deleteUser(){
      const url=`http://localhost:5000/usuarios/${id}`
      fetch(url)
      .then(resp=>resp.json())
      .then(data=>{
        if(data.userStatus){
          const prosseguir=window.confirm("O usuário está online.\nCuidado ao deletar!")
          if(prosseguir){
            fetch(url, { method: 'DELETE' })
            updateDataBase()
          }
        }else{
          fetch(url, { method: 'DELETE' })
          updateDataBase()
        }
      })
    }

    return (
    <>
        <Nav/>
        <Body>
            <h1>{msg}</h1>
            <DeletePanel>
              <h3>Digite o id do usuário que deseja deletar!</h3>
              <input onChange={(e)=>handleChange(e.target.value)} placeholder="Id do usuário"></input>
              <button onClick={deleteUser}>Deletar</button>
            </DeletePanel>
            {userList.length>0 && userList.map((user)=><CardUser nome={user.userName} email={user.userEmail} id={user.id} status={user.userStatus}/>)}
        </Body>
    </>
  )
}
