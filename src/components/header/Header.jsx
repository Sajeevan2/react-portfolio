import React from 'react'
import './header.css'
import CTA from './CTA'
import prof from '../../assets/prof.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Sajeevan</h1>
        <h5 className='text-light'>Full Stack developer</h5>
        <CTA/>

        <HeaderSocials/>
        <div className="me">
          <img src={prof} alt=""/>
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header