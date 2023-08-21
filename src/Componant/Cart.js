import React from 'react'
import './Header.css'


export default function Cart({setShow}) {
  return (
    <button className='cartContainer' onClick={()=>setShow(false)}>
      <span><b>YOUR CART</b></span>
      <img src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" alt="" srcset="" className='img'/>
      <span className='cartItems'><b>3</b></span>
    </button>
  )
}