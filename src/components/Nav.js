import React from 'react';
import "../css/Nav.css"
import logo from '../images/netflix-logo.svg'
import profileIcon from '../images/netflix-profile-icon.png'

function Nav() {
  return (
    <div className='Nav'>
      <img src={logo} className='logo' alt='netflix-logo'/>
      <img src ={profileIcon} className='profile'alt='netflix-profile-icon'/>
    </div>
  )
}

export default Nav