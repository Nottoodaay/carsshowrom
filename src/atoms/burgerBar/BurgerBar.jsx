import React from 'react'

import "./burgerBar.scss"
import {GiHamburgerMenu} from 'react-icons/gi'

export const BurgerBar = ({onClick}) => {
  return (
    <>
      <GiHamburgerMenu className='burgerBar' onClick={onClick} />
    </>
  )
}
