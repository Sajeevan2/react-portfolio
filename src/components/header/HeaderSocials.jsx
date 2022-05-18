import React from 'react'
import {BsLinkedin,BsGithub} from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/sajeevan-srikumar-02081995s/" target="_blank"><BsLinkedin/></a>
        <a href="https://giyhub.com" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials