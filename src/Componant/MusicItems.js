import React from 'react'
import './MusicItems.css'

export default function MusicItems(props) {
    const productsArr = [

        {
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        },
        
        {
        
        title: 'Blue Color',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        
        }
        
        ]
   
        
        
  return (
    <div className='itemContainer'>
       
      {productsArr.map((item)=>(
        <div className='result'>
            <h4>ALBUM</h4>

        <img src={item.imageUrl} alt="" srcset="" />
        <div className='price'><b>₹{item.price}</b></div>
        <button type="button" class="btn btn-outline-primary" className='button'><b>ADD TO CART</b></button>
        </div>
      ))}
    </div>
  )
}