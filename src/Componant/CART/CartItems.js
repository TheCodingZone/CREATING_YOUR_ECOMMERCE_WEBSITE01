import React from 'react'
import './CartItems.css'

export default function CartItems() {
    const cartElements = [

        {
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        quantity: 2,
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        quantity: 3,
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        quantity: 1,
        
        }
        
        ]
  return (
    <div >
     <h2 className='heading'>ADDED ITEMS</h2>
     <div className='CartContainer'>
     {cartElements.map((item) => (
    
    
      
    <div key={item.title} className='container'>
       
    <span className='title'>{item.title}</span>
    <br />
   
   
      <img src={item.imageUrl} alt={item.title} className='img'/>
      <span className='price'>Price:-{item.price}</span>
    <span className='quantity'>Quantity:-{item.quantity}</span>
    
  </div>
   ))}
   <div className="second">
   <div>Total Amount:-Rs</div>
  <button className='btn btn-danger'>CONFIRM ORDER</button>
   </div>
  
     </div>
    
  </div>
  )
}