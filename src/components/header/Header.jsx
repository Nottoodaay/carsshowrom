import React, { useState } from 'react'

import './header.scss'

import { NavBar } from '../navbar/NavBar'
import { Logo } from '../../atoms/logo/Logo'
import { BurgerBar } from '../../atoms/burgerBar/BurgerBar'

export const Header = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false)

  const navBarOpen = () =>{
    return setIsNavBarOpen(!isNavBarOpen)
  }
  
  return (
    <div className='header'>
      <Logo/>
      <BurgerBar onClick={navBarOpen} />
      {isNavBarOpen && <NavBar onClose={navBarOpen}/>}
      
    </div>
  )
}
