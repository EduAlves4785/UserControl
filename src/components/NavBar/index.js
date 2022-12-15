import React, { useEffect, useState } from 'react'
import { Navbar} from './styles'
import {Link} from 'react-router-dom'

export default function Nav() {

  return (
    <Navbar>
        <h1>UserControl</h1>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/gerenciar">
          <button>Gerenciar</button>
        </Link>
    </Navbar>
  )
}
