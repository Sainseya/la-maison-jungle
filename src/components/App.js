import Banner from './Banner';
import Cart from './Cart';
import Footer from './Footer';
import ShoppingList from './ShoppingList';
import '../styles/Layout.css'
import { useEffect, useState } from 'react';
import React from 'react';


function App() {

  const [cart, updateCart] = useState(() =>{
  const savedData = localStorage.getItem('cart');
  const parseData = JSON.parse(savedData) // transforme le Json en un objet JS
    return parseData || [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log("toto")
  })

  return(
  <div>
    <Banner />
    <div className='lmj-layout-inner'>
        <Cart cart={cart} updateCart={updateCart}/>
        <ShoppingList cart={cart} updateCart={updateCart}/>
    </div>
        <Footer />
  </div>)
}

export default App;

