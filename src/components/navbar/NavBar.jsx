import React from 'react'
import './navbar.scss'
import {AiFillCloseCircle} from 'react-icons/ai'

export const NavBar = ({onClose}) => {
  return (
    <div className='navBar'>
      <h2 className='navBarNavigation'>Sign up</h2>
      <h2 className='navBarNavigation'>Catalog</h2>
      <h2 className='navBarNavigation'>Contact</h2>
      <h2 className='navBarNavigation'>About Us</h2>
      <AiFillCloseCircle className='closeBtn' onClick={onClose}/>
    </div>
  )
}
