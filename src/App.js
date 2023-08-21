import { Fragment, useState } from 'react';
import './App.css';
import CartItems from './Componant/CART/CartItems';
import Footer from './Componant/Footer';
import Header from './Componant/Header';
import MusicItems from './Componant/MusicItems';
import TitleHeading from './Componant/TitleHeading';

function App() {
  const[show,setShow]=useState(true);
  const[cart,setCart]=useState([]);
  return (
    <Fragment>
      <Header setShow={setShow}/>
     {/* { 
     show===true &&
      
       
      } 
     */}
     { 
      show===false &&
      
     <CartItems setShow={setShow}/>
       } 
       
       {
      show===true &&  
      <TitleHeading/>
     }
     {
      show===true &&  
      <h2 >MUSIC</h2> && <MusicItems/>
     }
     
       
     
      
     
     
    
     
     

     <Footer/>
    </Fragment>
  );
}

export default App;
