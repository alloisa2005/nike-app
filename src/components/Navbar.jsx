import React from 'react'
import HeaderLogo from '../assets/images/header-logo.svg'
import hamburguer from '../assets/icons/hamburger.svg'

const Navbar = () => {
  return (
    <header className='padding-x'>
      <nav>
        <a href="/"><img src={HeaderLogo} alt="logo" width={130} height={29} /></a>
      </nav>      
    </header>
  )
}

export default Navbar