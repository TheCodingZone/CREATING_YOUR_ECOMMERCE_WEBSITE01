import React from 'react'
import './Header.css'
import Cart from './Cart'

export default function Header(props) {
  return (
    <div className='header'>
      <span className='title'><b>THE GENERICS!</b></span>
      

        <a href='' className='section'><b>Home</b></a>
        <a href=''className='section'><b>About</b></a>
        <a href=''className='section'><b>Services</b></a>
       
     
      <Cart/>
    </div>
  )
}
 