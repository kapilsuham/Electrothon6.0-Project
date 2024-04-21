import React from 'react'
import logo from '../Img/logo.jpg'
function Logo({width = '100px'}) {
  return (
    <div><img src={logo} className='w-32 h-10' alt="" /></div>
  )
}

export default Logo