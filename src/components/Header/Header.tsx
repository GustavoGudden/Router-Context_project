import { Drawer } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import * as C from './style'


export const Header  = ()=>{

const handleNavigate = () =>{
}


return (
<>
<C.Header>
<h1> loja</h1>

<nav>
  <Link to="/">home</Link>
  <Link to="/favorites">Favoritos</Link>
  <a href="">Estoque</a>
  <a href="">Quem somos</a>
</nav>
</C.Header>
</>
)



}