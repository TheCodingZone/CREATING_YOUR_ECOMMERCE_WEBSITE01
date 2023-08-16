import React from 'react'
import './Header.css'


export default function Cart(props) {
  return (
    <button className='cartContainer'>
      <span><b>YOUR CART</b></span>
      <img src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" alt="" srcset="" className='img'/>
      <span className='cartItems'><b>3</b></span>
    </button>
  )
}
