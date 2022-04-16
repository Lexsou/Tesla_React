import React from 'react'
import "./Header.css"
import TeslaLogo from "../assets/teslaLogoSmall.svg"

const Header = () => {
  return (
    <div className='header'>
        <div className='header__logo'>
           <img src={TeslaLogo} alt='tesla logo'/>
        </div>
        <div className='header__center'>
        <p>Model S</p>
        <p>Model 3</p>
        <p>Model X</p>
        <p>Model Y</p>
        <p>Powerwall</p>
        <p>Recharge</p>
        </div>
        <div className='header_right'>
          <p>Shop</p>
          <p>Account</p>
        </div>
    </div>
  )
}

export default Header